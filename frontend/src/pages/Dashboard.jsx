import { PlusIcon, UploadCloudIcon } from "lucide-react";
import {dummyResumeData} from '../assets/assets'
import { useEffect } from "react";

function Dashboard() {

  const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a']

  const [allResumes, setAllResumes] = useState([])

  const loadAllResumes = async ()=>{
    setAllResumes(dummyResumeData)
  }

  useEffect(()=>{
    loadAllResumes()
  },[])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-3xl font-medium mb-8 text-neutral-900">
          Your next opportunity starts here
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
          <button className="bg-white h-52 flex flex-col items-center justify-center rounded-2xl gap-3 text-neutral-700 border border-neutral-300 hover:border-black hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer">
            <PlusIcon className="size-12 p-3 bg-black text-white rounded-full" />
            <p className="text-sm font-medium">Create Resume</p>
          </button>

          <button className="bg-white h-52 flex flex-col items-center justify-center rounded-2xl gap-3 text-neutral-700 border border-neutral-300 hover:border-black hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer">
            <UploadCloudIcon className="size-12 p-3 bg-black text-white rounded-full" />
            <p className="text-sm font-medium">Upload Existing</p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm::w-[305px]"/>

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index)=>{
            const baseColor = colors[index % colors.length]
            return (
              <button key={index}>

              </button>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;