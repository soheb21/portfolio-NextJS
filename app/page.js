import ClientHomeView from './components/client-view/home'
import ClientAboutView from './components/client-view/about'
import ClientSkillsView from './components/client-view/skills'
import ClientEducationView from './components/client-view/education'
import ClientContactView from './components/client-view/contact'
import ClientProjectView from './components/client-view/project'

async function extractAllData(currentView) {
  const response = await fetch(`${process.env.URL}/api/${currentView}/get`, {
    method: "GET",
    cache: "no-cache"
  });
  const data = await response.json();
  return data && data.data
}

export default async function HomePage() {

  const homeData = await extractAllData("Home");
  const aboutData = await extractAllData("About");
  const skillsData = await extractAllData("Skills");
  const educationData = await extractAllData("Education");
  const projectData = await extractAllData("Project");


  return (
    <>
      <div className="">
        <ClientHomeView data={homeData} />
        <ClientAboutView data={aboutData} />
        <ClientSkillsView data={skillsData} />
        <ClientEducationView data={educationData} />
        <ClientProjectView data={projectData} />
        <ClientContactView />
      </div>
    </>
  )

}
