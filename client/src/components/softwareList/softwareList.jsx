import useFetch from "../../hooks/useFecth"
import "./softwareList.css"

const SoftwareList = () => {

    const { data, loading, error } = useFetch("/labs/") 

    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://logosmarcas.net/wp-content/uploads/2020/12/MATLAB-Logo.png" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Matlab</h1>
                    <h3>MatLab</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://logonoid.com/images/android-studio-logo.png" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Android Studio</h1>
                    <h3>Google Inc.</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://pngimg.com/uploads/photoshop/photoshop_PNG12.png" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Photoshop</h1>
                    <h3>Adobe</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Ffile-type-vscode-icon-512x508-376y62ux.png&f=1&nofb=1&ipt=08b9fef627517ca3074a6bd8191b4670290a2a398664872b4f1b1c5fa1ed1ee7&ipo=images" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>VS Code</h1>
                    <h3>Microsoft</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F217d5ea0-623d-40b1-9b31-027b904a5f15%2Fdccudp7-221d1133-f3c3-48eb-a72c-c511828a1ff4.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGNjdWRwNy0yMjFkMTEzMy1mM2MzLTQ4ZWItYTcyYy1jNTExODI4YTFmZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S3JJltb4zsHM7mjDs1sVLVZ-wvzkhEn_GfflenFMc6I&f=1&nofb=1&ipt=9bebfef98a3a4da24ada063ef2e150bda60561d90d86089d75dcca9749485fa0&ipo=images" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>CLion</h1>
                    <h3>JetBrain</h3>
                </div>
            </div>
        </div>
    )
}


export default SoftwareList