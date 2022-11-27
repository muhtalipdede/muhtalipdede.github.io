<script>
	import data from "./data/cv.json";
	import Profile from "./components/Profile.svelte";
	import Experience from "./components/Experience.svelte";
	import Education from "./components/Education.svelte";
	import Award from "./components/Award.svelte";
	import Language from "./components/Language.svelte";
	import Project from "./components/Project.svelte";
	import Sidebar from "./components/Sidebar.svelte";

	const profile = data.profile;
	const social = data.social;
	const experience = data.experiences;
	const education = data.educations;
	const projects = data.projects;
	const awards = data.awards;
	const languages = data.languages;
	const skills = data.skills;
</script>

<div class="main">
	<div class="sidebar">
		<Sidebar {profile} {social} {skills} />
	</div>
	<div class="content">
		<Profile {profile} />
		<Experience {experience} />
		<Project {projects} />
		<Education {education} />
		<Language {languages} />
		<Award {awards} />
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.sidebar {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
</style>