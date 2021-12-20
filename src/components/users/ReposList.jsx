import RepoItem from "./RepoItem"

const ReposList = ({repos}) => {
    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    Recent Repositories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                {repos.map((repo) => <RepoItem key={repo.id} repo={repo}/>)}
                </div>
                
            </div>
        </div>
    )
}

export default ReposList
