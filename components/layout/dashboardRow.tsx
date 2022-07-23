


export default function DashboardRow({children}:any){
    return (
        <div className="w-full sm:grid sm:grid-cols-1 sm:gap-3 md:flex lg:flex xl:flex">
            {children}
        </div>
    )
}