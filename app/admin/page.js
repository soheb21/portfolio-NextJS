'use client'

import { useEffect, useState } from "react"
import AboutComponent from "../components/admin-view/about"
import ContactComponent from "../components/admin-view/contact"
import HomeComponent from "../components/admin-view/home"
import SkillComponent from "../components/admin-view/skills"
import ProjectComponent from "../components/admin-view/projects"
import EducationComponent from "../components/admin-view/education"
import { addData, getData, loginData, updateData } from "../services"
import Login from "../components/admin-view/login"

export default function AdminView() {
    const initialAdminHomeView = {
        heading: "",
        summary: ""
    }
    const initialAdminAboutView = {
        heading: "",
        myself: "",
        email: "",
        name: "",
        phone: "",
    }
    const initialAdminEducationView = {
        Cllg_School_name: "",
        Cllg_School_Date: "",
        Cllg_School_field: "",
    }
    const initialAdminProjectView = {
        //add project summary feature in future
        projectName: "",
        projectSkills: "",
        projectLink: "",
        projectGitHubLink: "",
    }
    const initialAdminSkillView = {
        skills: "",
    }
    const initialLoginView = {
        username: "",
        password: ""
    }
    const [currentID, setcurrentID] = useState("Home")
    const [formDataHome, setFormDataHome] = useState(initialAdminHomeView);
    const [formDataAbout, setFormDataAbout] = useState(initialAdminAboutView);
    const [formDataEducation, setFormDataEducation] = useState(initialAdminEducationView);
    const [formDataProject, setFormDataProject] = useState(initialAdminProjectView);
    const [formDataSkills, setFormDataSkills] = useState(initialAdminSkillView);
    const [isEdit, setIsEdit] = useState(false);
    const [allData, setAllData] = useState([]);
    const [isAuth, setISAuth] = useState(false);

    const [formDataLogin, setFormDataLogin] = useState(initialLoginView)

    const extractData = async () => {
        const response = await getData(currentID);
        setAllData(response?.data)

        if (currentID === "Home" && response.data && response.data.length) {
            setFormDataHome(response && response.data[0])
            setIsEdit(true);
        }
        if (currentID === "About" && response.data && response.data.length) {
            setFormDataAbout(response && response.data[0])
            setIsEdit(true);
        }

        // if (currentID === "Project" && response.data && response.data.length) {
        //     setFormDataProject(response && response.data[0])
        // }
        if (currentID === "Skills" && response.data && response.data.length) {
            setFormDataSkills(response && response.data[0])
            setIsEdit(true)
        }


    }
    const handleReset = async () => {
        setFormDataHome(initialAdminHomeView);
        setFormDataAbout(initialAdminAboutView);
        setFormDataEducation(initialAdminEducationView);
        setFormDataProject(initialAdminProjectView);
        setFormDataSkills(initialAdminSkillView);
    }
    const handleSave = async (currentTab) => {
        const dataMap = {
            Home: formDataHome,
            About: formDataAbout,
            Education: formDataEducation,
            Project: formDataProject,
            Skills: formDataSkills
        }
        const response = isEdit
            ? await updateData(currentTab, dataMap[currentTab])
            : await addData(currentTab, dataMap[currentTab])
        if (response.sucess) {
            handleReset();
            extractData();
        }


    }
    const handleLogin = async () => {
        const response = await loginData(formDataLogin);
        if (response.sucess) {
            sessionStorage.setItem("isAuth", JSON.stringify(true))
            alert(response?.message)
            setISAuth(true)
        }
    }
    useEffect(() => {
        extractData();
        if (sessionStorage.getItem("isAuth")) {
            setISAuth(true)
        }
    }, [currentID])
    const menuItems = [
        {
            id: "Home",
            label: "Home",
            component: <HomeComponent formData={formDataHome} setFormData={setFormDataHome} handleSave={handleSave} />
        },
        {
            id: "About",
            label: "About",
            component: <AboutComponent formData={formDataAbout} setFormData={setFormDataAbout} handleSave={handleSave} />
        },
        {
            id: "Skills",
            label: "Skills",
            component: <SkillComponent formData={formDataSkills} setFormData={setFormDataSkills} handleSave={handleSave} />

        },
        {
            id: "Project",
            label: "Project",
            component: <ProjectComponent formData={formDataProject} setFormData={setFormDataProject} handleSave={handleSave} data={allData} />
        },
        {
            id: "Education",
            label: "Education",
            component: <EducationComponent formData={formDataEducation} setFormData={setFormDataEducation} handleSave={handleSave} data={allData} />
        },
        {
            id: "Contact",
            label: "Contact",
            component: <ContactComponent  data={allData} />
        },
        {
            id: "Resume",
            label: "Resume"
        }
    ]

    if (!isAuth) return <Login formData={formDataLogin} setFormData={setFormDataLogin} handleLogin={handleLogin} />
    const handleLogout = () => {
        sessionStorage.removeItem("isAuth");
        alert("Logout sucessfull")
        setISAuth(false)
    }

    return (
        <div className="border-b border-gray-300" >
            <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
                {
                    menuItems && menuItems.map((item) => (
                        <button
                            key={item.id}
                            className="p-4 font-bold text-xl text-black"
                            type="button"
                            onClick={() => {
                                setcurrentID(item.id)
                                handleReset();
                                setIsEdit(false);
                            }}
                        >
                            {item.label}</button>
                    ))
                }
                <button onClick={handleLogout} className="bg-red-500 text-white w-fit h-fit p-2 rounded-md hover:bg-red-200 my-auto">Logout</button>

            </nav>
            <div className="p-10 mt-10">
                {
                    menuItems.map((item) => item.id === currentID &&
                        <div key={item.id}>
                            {item.component}
                        </div>
                    )
                }
            </div>
        </div>

    )
}