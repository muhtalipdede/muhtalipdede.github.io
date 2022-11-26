<script>
	import data from "./data/cv.json";
    import Profile from "./components/Profile.svelte";
	import Experience from "./components/Experience.svelte";
	import Education from "./components/Education.svelte";
	import Award from "./components/Award.svelte";
	import Language from "./components/Language.svelte";
    import Project from "./components/Project.svelte";

	const profile = data.profile;
	const social = data.social;
	const experience = data.experiences;
	const education = data.educations;
	const projects = data.projects;
	const awards = data.awards;
	const languages = data.languages;
</script>

<Profile profile={profile} social={social}/>
<Experience experience={experience} />
<Project projects={projects} />
<Education education={education} />
<Language languages={languages} />
<Award awards={awards} />
