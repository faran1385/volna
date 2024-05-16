import "./Report.css"

interface ReportProps {
    title: string
    hasBackstage: boolean
    timePassed: number
    comments: number,
    category: string,
    img: string
}

export const Report: React.FC<ReportProps> = (T) => {
    const { timePassed, title, hasBackstage, comments, category, img } = T
    return <>
        <div className="relative flex flex-col">
            {hasBackstage && (<button className="absolute top-5 left-5 flex justify-center items-center report__watch rounded-lg">
                <svg className="report__watch__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                </svg>
                <span className="ms-2">Watch backstage</span>
            </button>)}
            <div className="h-1/2 relative w-full">
                <a href="#" >
                    <img className="h-full w-full rounded-t-xl relative report__img" src={img} />
                </a>
                <div className="report__category rounded-lg absolute bottom-5 left-5 flex justify-center items-center">{category}</div>
            </div>
            <div className="report__info p-4 rounded-b-xl  flex flex-col justify-between">
                <div className="pb-4">
                    <a href="#" className="report__info__title">{title}</a>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <svg className="w-4" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path>
                        </svg>
                        <span className="ms-2 leading-0 report__info__detail">{timePassed} hours ago</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path>
                        </svg>
                        <span className="ms-2 leading-0 report__info__detail">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}