import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, UploadIcon, XIcon } from "lucide-react";
import {dummyResumeData} from '../assets/assets'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate()

  const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a']

  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)

  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const loadAllResumes = async ()=>{
    setAllResumes(dummyResumeData)
  }

  const createResume = async (event) => {
    event.preventDefault()
    setShowCreateResume(false)
    navigate(`/app/builder/res123`)
  }

  const uploadResume = async (event)=>{
    event.preventDefault()
    setShowUploadResume(false)
    navigate(`/app/builder/res123`)
  }

  const editTitle = async (event)=>{
    event.preventDefault()
  }

  const deleteResume = async (resumeId)=>{
    const confirm = window.confirm('Are you sure you want to delete this resume?')
    if(confirm){
      setAllResumes(prev=>prev.filter(resume=>resume._id !== resumeId))
    }
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
          <button onClick={()=>setShowCreateResume(true)} className="bg-white h-52 flex flex-col items-center justify-center rounded-2xl gap-3 text-neutral-700 border border-neutral-300 hover:border-black hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer">
            <PlusIcon className="size-12 p-3 bg-black text-white rounded-full" />
            <p className="text-sm font-medium">Create Resume</p>
          </button>

          <button onClick={()=>setShowUploadResume(true)} className="bg-white h-52 flex flex-col items-center justify-center rounded-2xl gap-3 text-neutral-700 border border-neutral-300 hover:border-black hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer">
            <UploadCloudIcon className="size-12 p-3 bg-black text-white rounded-full" />
            <p className="text-sm font-medium">Upload Existing</p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm::w-[305px]"/>

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index)=>{
            const baseColor = colors[index % colors.length]
            return (
              <button
                key={index}
                onClick={()=>navigate(`/app/builder/${resume._id}`)}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + '40'
                }}>
                  <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{color: baseColor}}/>
                  <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{color:baseColor}}>{resume.title}</p>
                  <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center" style={{color:baseColor + '90'}}>
                    Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                  <div onClick={e=>e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
                    <TrashIcon onClick={()=>deleteResume(resume._id)} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
                    <PencilIcon onClick={()=>{setEditResumeId(resume._id); setTitle(resume.title) }} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
                  </div>
              </button>
            )
          })}
        </div>

        {/* Create resume popup */}

        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-neutral-300 shadow-xl rounded-2xl w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-medium mb-4 text-neutral-900">
                Create a Resume
              </h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-neutral-300 rounded-xl focus:border-black outline-none"
                required
              />

              <button className="w-full py-2 bg-black text-white rounded-xl hover:opacity-90 transition-colors">
                Create Resume
              </button>

              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                setShowCreateResume(false)
                setTitle('')
                }}
              />
            </div>
          </form>
        )}

        {/* Upload resume popup */}

        {showUploadResume && (
          <form
            
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-neutral-300 shadow-xl rounded-2xl w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-medium mb-4 text-neutral-900">
                Upload a Resume
              </h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-neutral-300 rounded-xl focus:border-black outline-none"
                required
              />

              <div className="mb-4">
                <label htmlFor="resume-input" className="w-full border-2 border-dashed border-neutral-300 rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-black hover:bg-slate-50 transition-all duration-300">
                {resume ? (
                  <p className="text-sm text-slate-700">{resume.name}</p>
                    ) : (
                  <>
                    <UploadCloudIcon className="size-8 text-slate-500" />
                    <p className="text-sm text-slate-500">Upload Resume</p>
                  </>
                  )}
                </label>
                <input type="file" id="resume-input" accept=".pdf" hidden onChange={(e)=>setResume(e.target.files[0])}/>
              </div>

              <button className="w-full py-2 bg-black text-white rounded-xl hover:opacity-90 transition-colors">
                Upload Resume
              </button>

              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                setShowUploadResume(false)
                setTitle('')
                }}
              />
            </div>
          </form>
        )}

        {/* Edit Popup */}

        {editResumeId && (
          <form
            onSubmit={editTitle}
            onClick={() => setEditResumeId('')}
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-neutral-300 shadow-xl rounded-2xl w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-medium mb-4 text-neutral-900">
                Edit resume title
              </h2>

              <input
                type="text"
                placeholder="Enter new title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-neutral-300 rounded-xl focus:border-black outline-none"
                required
              />

              <button className="w-full py-2 bg-black text-white rounded-xl hover:opacity-90 transition-colors">
                Update
              </button>

              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                setEditResumeId('')
                setTitle('')
                }}
              />
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

export default Dashboard;