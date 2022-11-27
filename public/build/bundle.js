
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.53.1' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    var profile = {
    	name: "Muhtalip",
    	surname: "Dede",
    	title: "Software Engineer",
    	location: {
    		city: "Kartal, Istanbul",
    		country: "Turkey"
    	},
    	age: 27,
    	aboutme: "I am a software engineer. I have more than 5 years of total experience. I graduated from Yıldız Technical University, Department of Mathematics Engineering in 2018. Lastly, I worked as a Founding Engineer in the founding team of Datapad for about 1 year. I worked as a Senior Software Engineer at Dogus Technology before Datapad. As a technology stack, I work on frontend (eg VueJS), mobile technologies (eg React Native), backend technologies (eg NodeJS, C#, Python etc.) and frequently development operations (Kubernetes, Docker etc.) stacks. All the projects I have worked on so far are cloud-based technologies (eg AWS, GCP, Microsoft Azure, Openshift) and generally these projects are projects with microservice architecture. I have personally been interested in subjects such as open source code, artificial intelligence, image processing, internet of things since I was studying at university.",
    	email: "muhtalipdede@gmail.com",
    	phone: "+90 538 8590990"
    };
    var social = {
    	twitter: "https://twitter.com/MuhtalipDede",
    	linkedin: "https://www.linkedin.com/in/muhtalipdede/",
    	github: "https://github.com/muhtalipdede",
    	website: "https://muhtalip.com"
    };
    var experiences = [
    	{
    		company: "Datapad",
    		position: "Founding Engineer",
    		start: "Jan 2022",
    		end: "Nov 2022"
    	},
    	{
    		company: "Dogus Technology",
    		position: "Senior Software Developer",
    		start: "Jul 2017",
    		end: "Jan 2022"
    	},
    	{
    		company: "Halkbank",
    		position: "Software Development Intern",
    		start: "Jun 2016",
    		end: "Jul 2016"
    	}
    ];
    var educations = [
    	{
    		university: "Yıldız Technical University",
    		department: "Department of Mathematical Engineering",
    		description: "3.02/4.00 GPA - Honor Student",
    		start: "2014",
    		end: "2018"
    	},
    	{
    		university: "Yıldız Technical University",
    		department: "Foreign Language Preparatory School",
    		description: "",
    		start: "2013",
    		end: "2014"
    	}
    ];
    var projects = [
    	{
    		name: "Datapad Mobile App",
    		company: "Datapad",
    		description: "This project is a mobile application project. Users can follow their data daily by using many sources. These resources include Google Sheets, Facebook Ads, SQL, Google Analytics, Shopify, Stripe, Hotspot etc. integrations such as Mobile notifications are sent to the user as the data is updated. At the same time, users can follow the data together by adding their teammates to the workspace.",
    		stacks: [
    			"React Native",
    			"NodeJS",
    			"Deno",
    			"NextJS",
    			"MongoDB",
    			"AWS",
    			"Pulumi",
    			"Argo Workflows",
    			"GCP",
    			"Docker",
    			"Kubernetes",
    			"Google Sheets Api",
    			"Facebook Ads Api",
    			"Shopify Api",
    			"Firebase",
    			"Microservices",
    			"Lambda Functions"
    		]
    	},
    	{
    		name: "Petimle Mobile App && Petimle Vet Mobile App For Veterinarians",
    		company: "Dogus Technology",
    		description: "This app is for pet owners. This application is an application where pets can follow their health information. With this application, pet owners can talk to veterinarians instantly. In this application, users can follow the vaccine. A similar application has been developed for veterinarians.",
    		stacks: [
    			"React Native",
    			"Firebase",
    			"GCP",
    			"PubSub",
    			"Cloud Functions",
    			"Firestore"
    		]
    	},
    	{
    		name: "Vosvos Restful Api",
    		company: "Dogus Technology",
    		description: "This application is a web service. Users apply for automotive loan. After the application is completed, the loan gets approval or rejection status according to the user's information. Some users get manual confirmation status. Users with manual status contact the company.",
    		stacks: [
    			"dotnet Core",
    			"C#",
    			"Entity Framework",
    			"SQL Server",
    			"Docker",
    			"Kubernetes",
    			"GCP",
    			"Kafka",
    			"Redis",
    			"PostgreSQL",
    			"Microservices"
    		]
    	},
    	{
    		name: "Yazı Tura ML Project",
    		company: "Dogus Technology",
    		description: "this project is a machine learning project. This project estimates the daily money transfer amount and sends an e-mail to the users. The more consistent the daily money transfer forecast, the less loss the company will suffer.",
    		stacks: [
    			"Python",
    			"Jupyter Notebook",
    			"Google Colab",
    			"Docker",
    			"Kubernetes",
    			"GCP",
    			"Flask"
    		]
    	},
    	{
    		name: "Radar Web App && Radar Restful Api",
    		company: "Dogus Technology",
    		description: "This project is a form of the Thoughtworks Radar project. It was developed for Dogus Technology company. As an extra, backend service has been added for dynamic data.",
    		stacks: [
    			"D3",
    			"NodeJS",
    			"Express",
    			"MongoDB",
    			"Docker",
    			"Netlify",
    			"Firebase"
    		]
    	},
    	{
    		name: "Spark | Zebra Project",
    		company: "Dogus Technology",
    		description: "This project is a transformation project. The old system has been redeveloped using new technologies. At the same time, new features have been added. The application is a credit entry application. Dealers use. At the same time, they can track the credits entered.",
    		stacks: [
    			"VueJS",
    			"dotnet Core",
    			"C#",
    			"Entity Framework",
    			"SQL Server",
    			"Docker",
    			"Kubernetes",
    			"GCP",
    			"Openshift",
    			"Microservices",
    			"Redis",
    			"PostgreSQL",
    			"PugJS",
    			"Sass",
    			"Bootstrap",
    			"RabbitMQ",
    			"Elasticsearch",
    			"Kibana"
    		]
    	},
    	{
    		name: "e-Contract Web App",
    		company: "Dogus Technology",
    		description: "This application is an online contract application. Users read and approve agreements online.",
    		stacks: [
    			"VueJS",
    			"dotnet Core",
    			"C#",
    			"Entity Framework",
    			"SQL Server",
    			"Docker",
    			"Kubernetes",
    			"GCP",
    			"Openshift",
    			"Microservices",
    			"Redis",
    			"PostgreSQL",
    			"PugJS",
    			"Sass",
    			"Bootstrap",
    			"RabbitMQ",
    			"Elasticsearch",
    			"Kibana"
    		]
    	},
    	{
    		name: "Agrega Project",
    		company: "Dogus Technology",
    		description: "This app is a conversion app. This application is a CMS application. The current application has been redeveloped using new technologies. New modules have been added. These are offer module, risk module etc.",
    		stacks: [
    			"VueJS",
    			"dotnet Core",
    			"C#",
    			"Entity Framework",
    			"SQL Server",
    			"Docker",
    			"Kubernetes",
    			"GCP",
    			"Openshift",
    			"Microservices",
    			"Redis",
    			"PostgreSQL",
    			"PugJS",
    			"Sass",
    			"Bootstrap",
    			"RabbitMQ",
    			"Elasticsearch",
    			"Kibana"
    		]
    	},
    	{
    		name: "S-Fever | ASU IoT Project",
    		company: "Yıldız Technical University",
    		description: "This project is the internet of things project. There is a device. Several sensors have been added to this device. eg HCSR04, Panasonic AMG8833 etc. Raspberry Pi single board computer is used for this device. The data obtained from the sensors is sent to the main server. The main server collects this data. A calibration process is performed on the server. Machine learning methods were used for the calibration process. Users view the relevant device data instantly via the mobile application. Alarms are generated for emergencies.",
    		stacks: [
    			"Python",
    			"Java",
    			"JSP",
    			"Android",
    			"Raspberry Pi",
    			"XAMP",
    			"MySQL",
    			"Apache Tomcat",
    			"Backpropagation",
    			"AMG8833",
    			"HCSR04",
    			"DHT11"
    		]
    	}
    ];
    var awards = [
    	{
    		name: "Patent",
    		description: "S-Fever | Body Temperature Monitoring System",
    		url: "https://portal.turkpatent.gov.tr/anonim/arastirma/patent/sonuc/dosya?patentAppNo=2019%2F07825&documentsTpye=all"
    	},
    	{
    		name: "Golden Medal ISIF 2020",
    		description: "Istanbul International Invention Fair",
    		url: "http://www.istanbul-inventions.org/tr/42439/ISIF20-SONUCLAR"
    	},
    	{
    		name: "Gelecege Iz Bırakanlar - 2019",
    		description: "Dogus Technology",
    		url: ""
    	},
    	{
    		name: "Gelecege Iz Bırakanlar - 2018",
    		description: "Dogus Technology",
    		url: ""
    	},
    	{
    		name: "2209A - 2018",
    		description: "Tubitak",
    		url: ""
    	}
    ];
    var languages = [
    	{
    		name: "English"
    	}
    ];
    var data = {
    	profile: profile,
    	social: social,
    	experiences: experiences,
    	educations: educations,
    	projects: projects,
    	awards: awards,
    	languages: languages
    };

    /* src/components/Profile.svelte generated by Svelte v3.53.1 */

    const file = "src/components/Profile.svelte";

    function create_fragment(ctx) {
    	let div1;
    	let div0;
    	let span0;
    	let t0_value = /*profile*/ ctx[0].name + "";
    	let t0;
    	let t1;
    	let t2_value = /*profile*/ ctx[0].surname + "";
    	let t2;
    	let t3;
    	let t4_value = /*profile*/ ctx[0].title + "";
    	let t4;
    	let t5;
    	let span1;
    	let t6_value = /*profile*/ ctx[0].aboutme + "";
    	let t6;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			span0 = element("span");
    			t0 = text(t0_value);
    			t1 = space();
    			t2 = text(t2_value);
    			t3 = text(" | ");
    			t4 = text(t4_value);
    			t5 = space();
    			span1 = element("span");
    			t6 = text(t6_value);
    			attr_dev(span0, "class", "profile__info__name svelte-kradeg");
    			add_location(span0, file, 6, 8, 117);
    			attr_dev(span1, "class", "profile__info__aboutme svelte-kradeg");
    			add_location(span1, file, 9, 8, 239);
    			attr_dev(div0, "class", "profile__info__container svelte-kradeg");
    			add_location(div0, file, 5, 4, 70);
    			attr_dev(div1, "class", "profile svelte-kradeg");
    			add_location(div1, file, 4, 0, 44);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, span0);
    			append_dev(span0, t0);
    			append_dev(span0, t1);
    			append_dev(span0, t2);
    			append_dev(span0, t3);
    			append_dev(span0, t4);
    			append_dev(div0, t5);
    			append_dev(div0, span1);
    			append_dev(span1, t6);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*profile*/ 1 && t0_value !== (t0_value = /*profile*/ ctx[0].name + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*profile*/ 1 && t2_value !== (t2_value = /*profile*/ ctx[0].surname + "")) set_data_dev(t2, t2_value);
    			if (dirty & /*profile*/ 1 && t4_value !== (t4_value = /*profile*/ ctx[0].title + "")) set_data_dev(t4, t4_value);
    			if (dirty & /*profile*/ 1 && t6_value !== (t6_value = /*profile*/ ctx[0].aboutme + "")) set_data_dev(t6, t6_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Profile', slots, []);
    	let { profile } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (profile === undefined && !('profile' in $$props || $$self.$$.bound[$$self.$$.props['profile']])) {
    			console.warn("<Profile> was created without expected prop 'profile'");
    		}
    	});

    	const writable_props = ['profile'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Profile> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('profile' in $$props) $$invalidate(0, profile = $$props.profile);
    	};

    	$$self.$capture_state = () => ({ profile });

    	$$self.$inject_state = $$props => {
    		if ('profile' in $$props) $$invalidate(0, profile = $$props.profile);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [profile];
    }

    class Profile extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { profile: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Profile",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get profile() {
    		throw new Error("<Profile>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set profile(value) {
    		throw new Error("<Profile>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Experience.svelte generated by Svelte v3.53.1 */

    const file$1 = "src/components/Experience.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (8:8) {#each experience as item}
    function create_each_block(ctx) {
    	let span0;
    	let t0_value = /*item*/ ctx[1].company + "";
    	let t0;
    	let t1;
    	let t2_value = /*item*/ ctx[1].position + "";
    	let t2;
    	let t3;
    	let span1;
    	let t4_value = /*item*/ ctx[1].start + "";
    	let t4;
    	let t5;
    	let t6_value = /*item*/ ctx[1].end + "";
    	let t6;

    	const block = {
    		c: function create() {
    			span0 = element("span");
    			t0 = text(t0_value);
    			t1 = text(" - ");
    			t2 = text(t2_value);
    			t3 = space();
    			span1 = element("span");
    			t4 = text(t4_value);
    			t5 = text(" - ");
    			t6 = text(t6_value);
    			attr_dev(span0, "class", "title svelte-9yoxrt");
    			add_location(span0, file$1, 8, 12, 195);
    			attr_dev(span1, "class", "date svelte-9yoxrt");
    			add_location(span1, file$1, 9, 12, 267);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span0, anchor);
    			append_dev(span0, t0);
    			append_dev(span0, t1);
    			append_dev(span0, t2);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, span1, anchor);
    			append_dev(span1, t4);
    			append_dev(span1, t5);
    			append_dev(span1, t6);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*experience*/ 1 && t0_value !== (t0_value = /*item*/ ctx[1].company + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*experience*/ 1 && t2_value !== (t2_value = /*item*/ ctx[1].position + "")) set_data_dev(t2, t2_value);
    			if (dirty & /*experience*/ 1 && t4_value !== (t4_value = /*item*/ ctx[1].start + "")) set_data_dev(t4, t4_value);
    			if (dirty & /*experience*/ 1 && t6_value !== (t6_value = /*item*/ ctx[1].end + "")) set_data_dev(t6, t6_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(span1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(8:8) {#each experience as item}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div1;
    	let span;
    	let i;
    	let t0;
    	let t1;
    	let div0;
    	let each_value = /*experience*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			span = element("span");
    			i = element("i");
    			t0 = text("Experiences");
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(i, "class", "fa-solid fa-briefcase svelte-9yoxrt");
    			add_location(i, file$1, 5, 10, 82);
    			attr_dev(span, "class", "svelte-9yoxrt");
    			add_location(span, file$1, 5, 4, 76);
    			attr_dev(div0, "class", "svelte-9yoxrt");
    			add_location(div0, file$1, 6, 4, 142);
    			attr_dev(div1, "class", "experience svelte-9yoxrt");
    			add_location(div1, file$1, 4, 0, 47);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, span);
    			append_dev(span, i);
    			append_dev(span, t0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*experience*/ 1) {
    				each_value = /*experience*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Experience', slots, []);
    	let { experience } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (experience === undefined && !('experience' in $$props || $$self.$$.bound[$$self.$$.props['experience']])) {
    			console.warn("<Experience> was created without expected prop 'experience'");
    		}
    	});

    	const writable_props = ['experience'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Experience> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('experience' in $$props) $$invalidate(0, experience = $$props.experience);
    	};

    	$$self.$capture_state = () => ({ experience });

    	$$self.$inject_state = $$props => {
    		if ('experience' in $$props) $$invalidate(0, experience = $$props.experience);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [experience];
    }

    class Experience extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { experience: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Experience",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get experience() {
    		throw new Error("<Experience>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set experience(value) {
    		throw new Error("<Experience>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Education.svelte generated by Svelte v3.53.1 */

    const file$2 = "src/components/Education.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (8:8) {#each education as item}
    function create_each_block$1(ctx) {
    	let span0;
    	let t0_value = /*item*/ ctx[1].university + "";
    	let t0;
    	let t1;
    	let t2_value = /*item*/ ctx[1].department + "";
    	let t2;
    	let t3;
    	let span1;
    	let t4_value = /*item*/ ctx[1].description + "";
    	let t4;
    	let t5;
    	let span2;
    	let t6_value = /*item*/ ctx[1].start + "";
    	let t6;
    	let t7;
    	let t8_value = /*item*/ ctx[1].end + "";
    	let t8;

    	const block = {
    		c: function create() {
    			span0 = element("span");
    			t0 = text(t0_value);
    			t1 = text(" - ");
    			t2 = text(t2_value);
    			t3 = space();
    			span1 = element("span");
    			t4 = text(t4_value);
    			t5 = space();
    			span2 = element("span");
    			t6 = text(t6_value);
    			t7 = text(" - ");
    			t8 = text(t8_value);
    			attr_dev(span0, "class", "title svelte-1ldod9n");
    			add_location(span0, file$2, 8, 12, 185);
    			attr_dev(span1, "class", "description svelte-1ldod9n");
    			add_location(span1, file$2, 9, 12, 262);
    			attr_dev(span2, "class", "date svelte-1ldod9n");
    			add_location(span2, file$2, 10, 12, 326);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span0, anchor);
    			append_dev(span0, t0);
    			append_dev(span0, t1);
    			append_dev(span0, t2);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, span1, anchor);
    			append_dev(span1, t4);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, span2, anchor);
    			append_dev(span2, t6);
    			append_dev(span2, t7);
    			append_dev(span2, t8);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*education*/ 1 && t0_value !== (t0_value = /*item*/ ctx[1].university + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*education*/ 1 && t2_value !== (t2_value = /*item*/ ctx[1].department + "")) set_data_dev(t2, t2_value);
    			if (dirty & /*education*/ 1 && t4_value !== (t4_value = /*item*/ ctx[1].description + "")) set_data_dev(t4, t4_value);
    			if (dirty & /*education*/ 1 && t6_value !== (t6_value = /*item*/ ctx[1].start + "")) set_data_dev(t6, t6_value);
    			if (dirty & /*education*/ 1 && t8_value !== (t8_value = /*item*/ ctx[1].end + "")) set_data_dev(t8, t8_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(span1);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(span2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(8:8) {#each education as item}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div1;
    	let span;
    	let i;
    	let t0;
    	let t1;
    	let div0;
    	let each_value = /*education*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			span = element("span");
    			i = element("i");
    			t0 = text("Education");
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(i, "class", "fa-solid fa-book svelte-1ldod9n");
    			add_location(i, file$2, 5, 10, 80);
    			attr_dev(span, "class", "svelte-1ldod9n");
    			add_location(span, file$2, 5, 4, 74);
    			attr_dev(div0, "class", "svelte-1ldod9n");
    			add_location(div0, file$2, 6, 4, 133);
    			attr_dev(div1, "class", "education svelte-1ldod9n");
    			add_location(div1, file$2, 4, 0, 46);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, span);
    			append_dev(span, i);
    			append_dev(span, t0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*education*/ 1) {
    				each_value = /*education*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Education', slots, []);
    	let { education } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (education === undefined && !('education' in $$props || $$self.$$.bound[$$self.$$.props['education']])) {
    			console.warn("<Education> was created without expected prop 'education'");
    		}
    	});

    	const writable_props = ['education'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Education> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('education' in $$props) $$invalidate(0, education = $$props.education);
    	};

    	$$self.$capture_state = () => ({ education });

    	$$self.$inject_state = $$props => {
    		if ('education' in $$props) $$invalidate(0, education = $$props.education);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [education];
    }

    class Education extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { education: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Education",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get education() {
    		throw new Error("<Education>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set education(value) {
    		throw new Error("<Education>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Award.svelte generated by Svelte v3.53.1 */

    const file$3 = "src/components/Award.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (7:4) {#each awards as award}
    function create_each_block$2(ctx) {
    	let div;
    	let a;
    	let span;
    	let t0_value = /*award*/ ctx[1].name + "";
    	let t0;
    	let t1;
    	let t2_value = /*award*/ ctx[1].description + "";
    	let t2;
    	let a_href_value;
    	let t3;

    	const block = {
    		c: function create() {
    			div = element("div");
    			a = element("a");
    			span = element("span");
    			t0 = text(t0_value);
    			t1 = text(" | ");
    			t2 = text(t2_value);
    			t3 = space();
    			attr_dev(span, "class", "svelte-1qru5rl");
    			add_location(span, file$3, 8, 34, 196);
    			attr_dev(a, "href", a_href_value = /*award*/ ctx[1].url);
    			attr_dev(a, "class", "svelte-1qru5rl");
    			add_location(a, file$3, 8, 12, 174);
    			attr_dev(div, "class", "svelte-1qru5rl");
    			add_location(div, file$3, 7, 8, 156);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, a);
    			append_dev(a, span);
    			append_dev(span, t0);
    			append_dev(span, t1);
    			append_dev(span, t2);
    			append_dev(div, t3);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*awards*/ 1 && t0_value !== (t0_value = /*award*/ ctx[1].name + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*awards*/ 1 && t2_value !== (t2_value = /*award*/ ctx[1].description + "")) set_data_dev(t2, t2_value);

    			if (dirty & /*awards*/ 1 && a_href_value !== (a_href_value = /*award*/ ctx[1].url)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(7:4) {#each awards as award}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let div;
    	let span;
    	let i;
    	let t0;
    	let t1;
    	let each_value = /*awards*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			span = element("span");
    			i = element("i");
    			t0 = text("Awards");
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(i, "class", "fa-solid fa-award svelte-1qru5rl");
    			add_location(i, file$3, 5, 10, 73);
    			attr_dev(span, "class", "svelte-1qru5rl");
    			add_location(span, file$3, 5, 4, 67);
    			attr_dev(div, "class", "award svelte-1qru5rl");
    			add_location(div, file$3, 4, 0, 43);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, span);
    			append_dev(span, i);
    			append_dev(span, t0);
    			append_dev(div, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*awards*/ 1) {
    				each_value = /*awards*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Award', slots, []);
    	let { awards } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (awards === undefined && !('awards' in $$props || $$self.$$.bound[$$self.$$.props['awards']])) {
    			console.warn("<Award> was created without expected prop 'awards'");
    		}
    	});

    	const writable_props = ['awards'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Award> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('awards' in $$props) $$invalidate(0, awards = $$props.awards);
    	};

    	$$self.$capture_state = () => ({ awards });

    	$$self.$inject_state = $$props => {
    		if ('awards' in $$props) $$invalidate(0, awards = $$props.awards);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [awards];
    }

    class Award extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { awards: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Award",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get awards() {
    		throw new Error("<Award>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set awards(value) {
    		throw new Error("<Award>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Language.svelte generated by Svelte v3.53.1 */

    const file$4 = "src/components/Language.svelte";

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (8:8) {#each languages as language}
    function create_each_block$3(ctx) {
    	let span;
    	let t_value = /*language*/ ctx[1].name + "";
    	let t;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t = text(t_value);
    			attr_dev(span, "class", "title svelte-idizqc");
    			add_location(span, file$4, 8, 12, 198);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*languages*/ 1 && t_value !== (t_value = /*language*/ ctx[1].name + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$3.name,
    		type: "each",
    		source: "(8:8) {#each languages as language}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let div1;
    	let span;
    	let i;
    	let t0;
    	let t1;
    	let div0;
    	let each_value = /*languages*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			span = element("span");
    			i = element("i");
    			t0 = text("Languages");
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(i, "class", "fa-solid fa-earth-americas svelte-idizqc");
    			add_location(i, file$4, 5, 10, 79);
    			attr_dev(span, "class", "svelte-idizqc");
    			add_location(span, file$4, 5, 4, 73);
    			attr_dev(div0, "class", "svelte-idizqc");
    			add_location(div0, file$4, 6, 4, 142);
    			attr_dev(div1, "class", "language svelte-idizqc");
    			add_location(div1, file$4, 4, 0, 46);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, span);
    			append_dev(span, i);
    			append_dev(span, t0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*languages*/ 1) {
    				each_value = /*languages*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$3(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$3(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Language', slots, []);
    	let { languages } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (languages === undefined && !('languages' in $$props || $$self.$$.bound[$$self.$$.props['languages']])) {
    			console.warn("<Language> was created without expected prop 'languages'");
    		}
    	});

    	const writable_props = ['languages'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Language> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('languages' in $$props) $$invalidate(0, languages = $$props.languages);
    	};

    	$$self.$capture_state = () => ({ languages });

    	$$self.$inject_state = $$props => {
    		if ('languages' in $$props) $$invalidate(0, languages = $$props.languages);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [languages];
    }

    class Language extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { languages: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Language",
    			options,
    			id: create_fragment$4.name
    		});
    	}

    	get languages() {
    		throw new Error("<Language>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set languages(value) {
    		throw new Error("<Language>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Project.svelte generated by Svelte v3.53.1 */

    const file$5 = "src/components/Project.svelte";

    function get_each_context$4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (12:16) {#each project.stacks as stack}
    function create_each_block_1(ctx) {
    	let span;
    	let t_value = "#" + /*stack*/ ctx[4] + "";
    	let t;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t = text(t_value);
    			attr_dev(span, "class", "stack svelte-13o2f63");
    			add_location(span, file$5, 12, 20, 428);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*projects*/ 1 && t_value !== (t_value = "#" + /*stack*/ ctx[4] + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(12:16) {#each project.stacks as stack}",
    		ctx
    	});

    	return block;
    }

    // (8:8) {#each projects as project}
    function create_each_block$4(ctx) {
    	let span0;
    	let t0_value = /*project*/ ctx[1].name + "";
    	let t0;
    	let t1;
    	let t2_value = /*project*/ ctx[1].company + "";
    	let t2;
    	let t3;
    	let span1;
    	let t4_value = /*project*/ ctx[1].description + "";
    	let t4;
    	let t5;
    	let div;
    	let t6;
    	let each_value_1 = /*project*/ ctx[1].stacks;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			span0 = element("span");
    			t0 = text(t0_value);
    			t1 = text(" | ");
    			t2 = text(t2_value);
    			t3 = space();
    			span1 = element("span");
    			t4 = text(t4_value);
    			t5 = space();
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t6 = space();
    			attr_dev(span0, "class", "title svelte-13o2f63");
    			add_location(span0, file$5, 8, 12, 187);
    			attr_dev(span1, "class", "description svelte-13o2f63");
    			add_location(span1, file$5, 9, 12, 261);
    			attr_dev(div, "class", "stack__container svelte-13o2f63");
    			add_location(div, file$5, 10, 12, 328);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span0, anchor);
    			append_dev(span0, t0);
    			append_dev(span0, t1);
    			append_dev(span0, t2);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, span1, anchor);
    			append_dev(span1, t4);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			append_dev(div, t6);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*projects*/ 1 && t0_value !== (t0_value = /*project*/ ctx[1].name + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*projects*/ 1 && t2_value !== (t2_value = /*project*/ ctx[1].company + "")) set_data_dev(t2, t2_value);
    			if (dirty & /*projects*/ 1 && t4_value !== (t4_value = /*project*/ ctx[1].description + "")) set_data_dev(t4, t4_value);

    			if (dirty & /*projects*/ 1) {
    				each_value_1 = /*project*/ ctx[1].stacks;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, t6);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(span1);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$4.name,
    		type: "each",
    		source: "(8:8) {#each projects as project}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let div1;
    	let span;
    	let i;
    	let t0;
    	let t1;
    	let div0;
    	let each_value = /*projects*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			span = element("span");
    			i = element("i");
    			t0 = text("Projects");
    			t1 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(i, "class", "fa-solid fa-computer svelte-13o2f63");
    			add_location(i, file$5, 5, 10, 77);
    			attr_dev(span, "class", "svelte-13o2f63");
    			add_location(span, file$5, 5, 4, 71);
    			attr_dev(div0, "class", "svelte-13o2f63");
    			add_location(div0, file$5, 6, 4, 133);
    			attr_dev(div1, "class", "project svelte-13o2f63");
    			add_location(div1, file$5, 4, 0, 45);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, span);
    			append_dev(span, i);
    			append_dev(span, t0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*projects*/ 1) {
    				each_value = /*projects*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$4(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$4(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Project', slots, []);
    	let { projects } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (projects === undefined && !('projects' in $$props || $$self.$$.bound[$$self.$$.props['projects']])) {
    			console.warn("<Project> was created without expected prop 'projects'");
    		}
    	});

    	const writable_props = ['projects'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Project> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('projects' in $$props) $$invalidate(0, projects = $$props.projects);
    	};

    	$$self.$capture_state = () => ({ projects });

    	$$self.$inject_state = $$props => {
    		if ('projects' in $$props) $$invalidate(0, projects = $$props.projects);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [projects];
    }

    class Project extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { projects: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Project",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get projects() {
    		throw new Error("<Project>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set projects(value) {
    		throw new Error("<Project>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Social.svelte generated by Svelte v3.53.1 */

    const file$6 = "src/components/Social.svelte";

    function create_fragment$6(ctx) {
    	let div1;
    	let div0;
    	let a0;
    	let i0;
    	let a0_href_value;
    	let t0;
    	let a1;
    	let i1;
    	let a1_href_value;
    	let t1;
    	let a2;
    	let i2;
    	let a2_href_value;
    	let t2;
    	let a3;
    	let i3;
    	let a3_href_value;
    	let t3;
    	let a4;
    	let i4;
    	let a4_href_value;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			a0 = element("a");
    			i0 = element("i");
    			t0 = space();
    			a1 = element("a");
    			i1 = element("i");
    			t1 = space();
    			a2 = element("a");
    			i2 = element("i");
    			t2 = space();
    			a3 = element("a");
    			i3 = element("i");
    			t3 = space();
    			a4 = element("a");
    			i4 = element("i");
    			attr_dev(i0, "class", "fa-brands fa-twitter");
    			add_location(i0, file$6, 6, 33, 107);
    			attr_dev(a0, "href", a0_href_value = /*social*/ ctx[0].twitter);
    			attr_dev(a0, "class", "svelte-vo34ps");
    			add_location(a0, file$6, 6, 8, 82);
    			attr_dev(i1, "class", "fa-brands fa-linkedin");
    			add_location(i1, file$6, 7, 34, 182);
    			attr_dev(a1, "href", a1_href_value = /*social*/ ctx[0].linkedin);
    			attr_dev(a1, "class", "svelte-vo34ps");
    			add_location(a1, file$6, 7, 8, 156);
    			attr_dev(i2, "class", "fa-brands fa-github");
    			add_location(i2, file$6, 8, 32, 256);
    			attr_dev(a2, "href", a2_href_value = /*social*/ ctx[0].github);
    			attr_dev(a2, "class", "svelte-vo34ps");
    			add_location(a2, file$6, 8, 8, 232);
    			attr_dev(i3, "class", "fa-brands fa-medium");
    			add_location(i3, file$6, 9, 32, 328);
    			attr_dev(a3, "href", a3_href_value = /*social*/ ctx[0].medium);
    			attr_dev(a3, "class", "svelte-vo34ps");
    			add_location(a3, file$6, 9, 8, 304);
    			attr_dev(i4, "class", "fa-solid fa-user-astronaut");
    			add_location(i4, file$6, 10, 33, 401);
    			attr_dev(a4, "href", a4_href_value = /*social*/ ctx[0].website);
    			attr_dev(a4, "class", "svelte-vo34ps");
    			add_location(a4, file$6, 10, 8, 376);
    			attr_dev(div0, "class", "svelte-vo34ps");
    			add_location(div0, file$6, 5, 4, 68);
    			attr_dev(div1, "class", "social svelte-vo34ps");
    			add_location(div1, file$6, 4, 0, 43);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, a0);
    			append_dev(a0, i0);
    			append_dev(div0, t0);
    			append_dev(div0, a1);
    			append_dev(a1, i1);
    			append_dev(div0, t1);
    			append_dev(div0, a2);
    			append_dev(a2, i2);
    			append_dev(div0, t2);
    			append_dev(div0, a3);
    			append_dev(a3, i3);
    			append_dev(div0, t3);
    			append_dev(div0, a4);
    			append_dev(a4, i4);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*social*/ 1 && a0_href_value !== (a0_href_value = /*social*/ ctx[0].twitter)) {
    				attr_dev(a0, "href", a0_href_value);
    			}

    			if (dirty & /*social*/ 1 && a1_href_value !== (a1_href_value = /*social*/ ctx[0].linkedin)) {
    				attr_dev(a1, "href", a1_href_value);
    			}

    			if (dirty & /*social*/ 1 && a2_href_value !== (a2_href_value = /*social*/ ctx[0].github)) {
    				attr_dev(a2, "href", a2_href_value);
    			}

    			if (dirty & /*social*/ 1 && a3_href_value !== (a3_href_value = /*social*/ ctx[0].medium)) {
    				attr_dev(a3, "href", a3_href_value);
    			}

    			if (dirty & /*social*/ 1 && a4_href_value !== (a4_href_value = /*social*/ ctx[0].website)) {
    				attr_dev(a4, "href", a4_href_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Social', slots, []);
    	let { social } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (social === undefined && !('social' in $$props || $$self.$$.bound[$$self.$$.props['social']])) {
    			console.warn("<Social> was created without expected prop 'social'");
    		}
    	});

    	const writable_props = ['social'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Social> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('social' in $$props) $$invalidate(0, social = $$props.social);
    	};

    	$$self.$capture_state = () => ({ social });

    	$$self.$inject_state = $$props => {
    		if ('social' in $$props) $$invalidate(0, social = $$props.social);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [social];
    }

    class Social extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { social: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Social",
    			options,
    			id: create_fragment$6.name
    		});
    	}

    	get social() {
    		throw new Error("<Social>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set social(value) {
    		throw new Error("<Social>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Sidebar.svelte generated by Svelte v3.53.1 */
    const file$7 = "src/components/Sidebar.svelte";

    function create_fragment$7(ctx) {
    	let div1;
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let span0;
    	let t1;
    	let t2_value = /*profile*/ ctx[0].age + "";
    	let t2;
    	let t3;
    	let span1;
    	let a0;
    	let t4_value = /*profile*/ ctx[0].email + "";
    	let t4;
    	let a0_href_value;
    	let t5;
    	let span2;
    	let a1;
    	let t6_value = /*profile*/ ctx[0].phone + "";
    	let t6;
    	let a1_href_value;
    	let t7;
    	let span3;
    	let t8_value = /*profile*/ ctx[0].location.city + "";
    	let t8;
    	let t9;
    	let t10_value = /*profile*/ ctx[0].location.country + "";
    	let t10;
    	let t11;
    	let social_1;
    	let current;

    	social_1 = new Social({
    			props: { social: /*social*/ ctx[1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			span0 = element("span");
    			t1 = text("Age: ");
    			t2 = text(t2_value);
    			t3 = space();
    			span1 = element("span");
    			a0 = element("a");
    			t4 = text(t4_value);
    			t5 = space();
    			span2 = element("span");
    			a1 = element("a");
    			t6 = text(t6_value);
    			t7 = space();
    			span3 = element("span");
    			t8 = text(t8_value);
    			t9 = space();
    			t10 = text(t10_value);
    			t11 = space();
    			create_component(social_1.$$.fragment);
    			attr_dev(img, "class", "profile__image svelte-16pig0n");
    			if (!src_url_equal(img.src, img_src_value = './build/assets/user.png')) attr_dev(img, "src", img_src_value);
    			add_location(img, file$7, 11, 16, 349);
    			add_location(span0, file$7, 15, 12, 468);
    			attr_dev(a0, "href", a0_href_value = "mailto:" + /*profile*/ ctx[0].email);
    			add_location(a0, file$7, 17, 16, 535);
    			add_location(span1, file$7, 16, 12, 512);
    			attr_dev(a1, "href", a1_href_value = "tel:" + /*profile*/ ctx[0].phone);
    			add_location(a1, file$7, 20, 16, 643);
    			add_location(span2, file$7, 19, 12, 620);
    			add_location(span3, file$7, 22, 12, 725);
    			attr_dev(div0, "class", "profile__image__container svelte-16pig0n");
    			add_location(div0, file$7, 8, 4, 169);
    			attr_dev(div1, "class", "sidebar__container svelte-16pig0n");
    			add_location(div1, file$7, 7, 0, 132);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, img);
    			append_dev(div0, t0);
    			append_dev(div0, span0);
    			append_dev(span0, t1);
    			append_dev(span0, t2);
    			append_dev(div0, t3);
    			append_dev(div0, span1);
    			append_dev(span1, a0);
    			append_dev(a0, t4);
    			append_dev(div0, t5);
    			append_dev(div0, span2);
    			append_dev(span2, a1);
    			append_dev(a1, t6);
    			append_dev(div0, t7);
    			append_dev(div0, span3);
    			append_dev(span3, t8);
    			append_dev(span3, t9);
    			append_dev(span3, t10);
    			append_dev(div0, t11);
    			mount_component(social_1, div0, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if ((!current || dirty & /*profile*/ 1) && t2_value !== (t2_value = /*profile*/ ctx[0].age + "")) set_data_dev(t2, t2_value);
    			if ((!current || dirty & /*profile*/ 1) && t4_value !== (t4_value = /*profile*/ ctx[0].email + "")) set_data_dev(t4, t4_value);

    			if (!current || dirty & /*profile*/ 1 && a0_href_value !== (a0_href_value = "mailto:" + /*profile*/ ctx[0].email)) {
    				attr_dev(a0, "href", a0_href_value);
    			}

    			if ((!current || dirty & /*profile*/ 1) && t6_value !== (t6_value = /*profile*/ ctx[0].phone + "")) set_data_dev(t6, t6_value);

    			if (!current || dirty & /*profile*/ 1 && a1_href_value !== (a1_href_value = "tel:" + /*profile*/ ctx[0].phone)) {
    				attr_dev(a1, "href", a1_href_value);
    			}

    			if ((!current || dirty & /*profile*/ 1) && t8_value !== (t8_value = /*profile*/ ctx[0].location.city + "")) set_data_dev(t8, t8_value);
    			if ((!current || dirty & /*profile*/ 1) && t10_value !== (t10_value = /*profile*/ ctx[0].location.country + "")) set_data_dev(t10, t10_value);
    			const social_1_changes = {};
    			if (dirty & /*social*/ 2) social_1_changes.social = /*social*/ ctx[1];
    			social_1.$set(social_1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(social_1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(social_1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(social_1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Sidebar', slots, []);
    	let { profile } = $$props;
    	let { social } = $$props;
    	let { skills } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (profile === undefined && !('profile' in $$props || $$self.$$.bound[$$self.$$.props['profile']])) {
    			console.warn("<Sidebar> was created without expected prop 'profile'");
    		}

    		if (social === undefined && !('social' in $$props || $$self.$$.bound[$$self.$$.props['social']])) {
    			console.warn("<Sidebar> was created without expected prop 'social'");
    		}

    		if (skills === undefined && !('skills' in $$props || $$self.$$.bound[$$self.$$.props['skills']])) {
    			console.warn("<Sidebar> was created without expected prop 'skills'");
    		}
    	});

    	const writable_props = ['profile', 'social', 'skills'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Sidebar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('profile' in $$props) $$invalidate(0, profile = $$props.profile);
    		if ('social' in $$props) $$invalidate(1, social = $$props.social);
    		if ('skills' in $$props) $$invalidate(2, skills = $$props.skills);
    	};

    	$$self.$capture_state = () => ({ Social, profile, social, skills });

    	$$self.$inject_state = $$props => {
    		if ('profile' in $$props) $$invalidate(0, profile = $$props.profile);
    		if ('social' in $$props) $$invalidate(1, social = $$props.social);
    		if ('skills' in $$props) $$invalidate(2, skills = $$props.skills);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [profile, social, skills];
    }

    class Sidebar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, { profile: 0, social: 1, skills: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sidebar",
    			options,
    			id: create_fragment$7.name
    		});
    	}

    	get profile() {
    		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set profile(value) {
    		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get social() {
    		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set social(value) {
    		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get skills() {
    		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set skills(value) {
    		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.53.1 */
    const file$8 = "src/App.svelte";

    function create_fragment$8(ctx) {
    	let div2;
    	let div0;
    	let sidebar;
    	let t0;
    	let div1;
    	let profile_1;
    	let t1;
    	let experience_1;
    	let t2;
    	let project;
    	let t3;
    	let education_1;
    	let t4;
    	let language;
    	let t5;
    	let award;
    	let current;

    	sidebar = new Sidebar({
    			props: {
    				profile: /*profile*/ ctx[0],
    				social: /*social*/ ctx[1],
    				skills: /*skills*/ ctx[7]
    			},
    			$$inline: true
    		});

    	profile_1 = new Profile({
    			props: { profile: /*profile*/ ctx[0] },
    			$$inline: true
    		});

    	experience_1 = new Experience({
    			props: { experience: /*experience*/ ctx[2] },
    			$$inline: true
    		});

    	project = new Project({
    			props: { projects: /*projects*/ ctx[4] },
    			$$inline: true
    		});

    	education_1 = new Education({
    			props: { education: /*education*/ ctx[3] },
    			$$inline: true
    		});

    	language = new Language({
    			props: { languages: /*languages*/ ctx[6] },
    			$$inline: true
    		});

    	award = new Award({
    			props: { awards: /*awards*/ ctx[5] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			create_component(sidebar.$$.fragment);
    			t0 = space();
    			div1 = element("div");
    			create_component(profile_1.$$.fragment);
    			t1 = space();
    			create_component(experience_1.$$.fragment);
    			t2 = space();
    			create_component(project.$$.fragment);
    			t3 = space();
    			create_component(education_1.$$.fragment);
    			t4 = space();
    			create_component(language.$$.fragment);
    			t5 = space();
    			create_component(award.$$.fragment);
    			attr_dev(div0, "class", "sidebar svelte-17eysba");
    			add_location(div0, file$8, 21, 1, 709);
    			attr_dev(div1, "class", "content svelte-17eysba");
    			add_location(div1, file$8, 24, 1, 782);
    			attr_dev(div2, "class", "main svelte-17eysba");
    			add_location(div2, file$8, 20, 0, 689);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			mount_component(sidebar, div0, null);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			mount_component(profile_1, div1, null);
    			append_dev(div1, t1);
    			mount_component(experience_1, div1, null);
    			append_dev(div1, t2);
    			mount_component(project, div1, null);
    			append_dev(div1, t3);
    			mount_component(education_1, div1, null);
    			append_dev(div1, t4);
    			mount_component(language, div1, null);
    			append_dev(div1, t5);
    			mount_component(award, div1, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(sidebar.$$.fragment, local);
    			transition_in(profile_1.$$.fragment, local);
    			transition_in(experience_1.$$.fragment, local);
    			transition_in(project.$$.fragment, local);
    			transition_in(education_1.$$.fragment, local);
    			transition_in(language.$$.fragment, local);
    			transition_in(award.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(sidebar.$$.fragment, local);
    			transition_out(profile_1.$$.fragment, local);
    			transition_out(experience_1.$$.fragment, local);
    			transition_out(project.$$.fragment, local);
    			transition_out(education_1.$$.fragment, local);
    			transition_out(language.$$.fragment, local);
    			transition_out(award.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_component(sidebar);
    			destroy_component(profile_1);
    			destroy_component(experience_1);
    			destroy_component(project);
    			destroy_component(education_1);
    			destroy_component(language);
    			destroy_component(award);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const profile = data.profile;
    	const social = data.social;
    	const experience = data.experiences;
    	const education = data.educations;
    	const projects = data.projects;
    	const awards = data.awards;
    	const languages = data.languages;
    	const skills = data.skills;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		data,
    		Profile,
    		Experience,
    		Education,
    		Award,
    		Language,
    		Project,
    		Sidebar,
    		profile,
    		social,
    		experience,
    		education,
    		projects,
    		awards,
    		languages,
    		skills
    	});

    	return [profile, social, experience, education, projects, awards, languages, skills];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
