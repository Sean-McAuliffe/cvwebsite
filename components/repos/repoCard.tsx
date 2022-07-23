import RepoCard from 'react-repo-card'


export default function RepoC(repo:object){
    return (
        <div className="sm:w-full md:w-1/4 lg:w-1/4 p-2 rounded-lg h-60 bg-white shadow-md flex flex-col">
           <RepoCard username="Sean-McAuliffe" repository="cvwebsite"/>
        </div>
    )
}