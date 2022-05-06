import React from "react";
import "./footer.css";

export const Footer = () => {

    return (
        <div>
        <div className="Topfooter">

            <div className="Topleftfooter">

                <img className="Topleftfooterimg" src="https://fraazo.com/static/app-screen-95bf468762091341a8e4bb213eeda2f8.png" alt="mobdelivery" />
            </div>

            <div className="Toprightfooter">

                <div className="Toprightfooterheading">
                <p className="Toprightfootermainheading">Download The App</p>
                <p className="Toprightfooterparag">Enter your phone number to receive a text with a link to download the app</p>
                </div>

                <div>
                    <input className="mobilenumberinput" type="number" placeholder= "  Enter Your Mobile number  " />
                    <button className="submit">SUBMIT</button>
                </div>

                <div className="available">
                    <div className="availableon">
                    <p>Available on </p>
                    </div>
                    <div className="availableimg">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className="availableimg">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="middlefooter">

            <div className="middlefootertop">
                <img className="middlefootertopimg" src="https://fraazo.com/static/footerDesign-26fcca451f726500fd06e7fc02d09cb4.svg" alt="" />
            </div>
            <div className="mainmiddlefooter">
                <div  className="mainmiddlefooterleft">
                    <img className="mainmiddlefooterleftimg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDkuNyA2OS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDkuNyA2OS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01Ny4xLDM5LjFDNTQuOCwxOSwzNCw5LjYsMTYuNiwxOC45Yy0yLjQsMS4zLTUuNSwzLjktNy4zLDZDNC43LDMwLjMsMi42LDM4LDMuNSw0NS4yCgkJCWMxLjYsMTMuMSwxNC4xLDI0LjUsMzAuMSwyMi43QzQ3LDY2LjUsNTguOCw1NCw1Ny4xLDM5LjF6IE0xNS45LDQ2LjhjLTEuMSwzLTIuOSw0LjItMC43LDguOWMxLjIsMi42LDMsNC4yLDQuOCw2LjEKCQkJQzEzLjcsNjAuNiwwLDQ0LjYsMTUuOSw0Ni44eiBNMjIuMSw0NS4zYy05LjQsMC4xLTE0LjktMy4xLTE0LjEsNi4zYy0xLjktMi40LTIuNC02LjktMS05LjhjMS4yLTIuNCwzLjYtMy44LDYuNy00LjUKCQkJYzQuOC0xLjIsMTUuNS0wLjcsMjEtMC40QzMzLjMsNDMuNiwyNy42LDQ1LjMsMjIuMSw0NS4zeiBNMzksMzAuNWMtNi42LDQtMTYuMiwzLjEtMjQsNWMtNC45LDEuMi01LjgsMi43LTguNSw1LjMKCQkJYzEuMi0xOC44LDI1LjctMjUuMywzOC0xOC45QzQ0LjQsMjUuNSw0MS43LDI4LjksMzksMzAuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIuMSwxNi42YzAuNy0wLjIsMS40LTAuNCwxLjMtMC41Yy0wLjItMC4yLTAuNC0wLjQtMC43LTFsLTAuMy0xYzAuNC0wLjIsMS44LTAuNCwyLjQtMC42CgkJCWMwLjgtMC4yLDEuNi0wLjUsMi4yLTAuOGMxLjMtMC42LDIuNS0xLjYsMy4zLTIuNmMyLjEtMi42LDItNi4xLDEuNy0xMGMtMC41LDAuMy0wLjgsMC43LTEuNSwxLjFjLTQuNywyLjYtOC44LDQuMi04LjYsMTAuOQoJCQlsLTAuNi0xLjJjLTAuMi0wLjQtMC41LTAuOS0wLjctMS4zYy0wLjUtMC45LTAuOS0xLjktMS43LTIuMUwxOCw4QzE4LjIsOS40LDIxLjYsMTMuMywyMi4xLDE2LjZ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZyBjbGFzcz0ic3QxIj4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTcwLjQsNTQuM2MwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3MwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWgtMS44djUuNmMwLDAuMSwwLDAuMi0wLjEsMC4zCgkJCQljLTAuMSwwLjEtMC4yLDAuMS0wLjQsMC4xYy0wLjEsMC0wLjMsMC0wLjQtMC4xYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuM3YtNS42aC0xLjhjLTAuMSwwLTAuMywwLTAuMy0wLjFTNjUsNTQuOCw2NSw1NC43CgkJCQljMC0wLjEsMC0wLjIsMC4xLTAuM3MwLjItMC4xLDAuMy0wLjFoNC42QzcwLjIsNTQuMiw3MC4zLDU0LjMsNzAuNCw1NC4zeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNODQuNCw1NC4zYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zdjZjMCwwLjEtMC4xLDAuMy0wLjEsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4yLDAtMC4zLTAuMQoJCQkJYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuNHYtMi42SDgwdjIuNmMwLDAuMSwwLDAuMy0wLjEsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4zLDAtMC40LTAuMQoJCQkJQzc5LjEsNjEsNzksNjAuOSw3OSw2MC43di02YzAtMC4xLDAtMC4yLDAuMS0wLjNjMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3YyLjVoMy42CgkJCQl2LTIuNWMwLTAuMSwwLTAuMiwwLjEtMC4zYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xQzg0LjIsNTQuMiw4NC4zLDU0LjMsODQuNCw1NC4zeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTQuNCw2MS4xYy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4zLDAtMC40LTAuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjR2LTZjMC0wLjEsMC0wLjIsMC4xLTAuMwoJCQkJYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xYzAuMSwwLDAuMiwwLDAuMywwLjFjMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjN2NkM5NC42LDYwLjksOTQuNSw2MSw5NC40LDYxLjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDkuMSw1NC4zYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zdjYuMWMwLDAuMSwwLDAuMy0wLjEsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWMtMC4xLDAtMC4xLDAtMC4yLDAKCQkJCWMtMC4xLDAtMC4xLTAuMS0wLjItMC4xbC0zLjktNS4xdjQuOGMwLDAuMSwwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWMtMC4xLDAtMC4yLDAtMC4zLTAuMQoJCQkJYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuM3YtNi4xYzAtMC4xLDAtMC4zLDAuMS0wLjNjMC4xLTAuMSwwLjItMC4xLDAuMy0wLjFjMC4xLDAsMC4yLDAsMC4yLDBjMC4xLDAsMC4xLDAuMSwwLjIsMC4xbDMuOSw1LjEKCQkJCXYtNC45YzAtMC4xLDAtMC4yLDAuMS0wLjNzMC4yLTAuMSwwLjMtMC4xQzEwOC45LDU0LjIsMTA5LDU0LjMsMTA5LjEsNTQuM3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyMy42LDYwLjdjMCwwLjEtMC4xLDAuMy0wLjIsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4yLTAuMS0wLjMtMC4ybC0yLjQtMy4xbC0xLjEsMS4xdjEuNwoJCQkJYzAsMC4xLDAsMC4zLTAuMSwwLjRjLTAuMSwwLjEtMC4yLDAuMS0wLjQsMC4xYy0wLjEsMC0wLjMsMC0wLjQtMC4xYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuNHYtNmMwLTAuMSwwLTAuMiwwLjEtMC4zCgkJCQljMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFzMC4zLDAsMC40LDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3YzLjFsMy41LTMuNGMwLjEtMC4xLDAuMy0wLjIsMC40LTAuMmMwLjEsMCwwLjIsMCwwLjMsMC4xCgkJCQljMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjNjMCwwLjEsMCwwLjItMC4xLDAuM2wtMi40LDIuMmwyLjUsMy4yQzEyMy42LDYwLjUsMTIzLjYsNjAuNiwxMjMuNiw2MC43eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTQzLjMsNTUuMXYyLjFoMi41YzAuMSwwLDAuMywwLDAuMywwLjFzMC4xLDAuMiwwLjEsMC4zYzAsMC4xLDAsMC4yLTAuMSwwLjNjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4xCgkJCQloLTIuNXYyLjZjMCwwLjEsMCwwLjItMC4xLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFjLTAuMSwwLTAuMywwLTAuNC0wLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4zdi02YzAtMC4xLDAtMC4yLDAuMS0wLjMKCQkJCWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgzLjRjMC4xLDAsMC4zLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM2MwLDAuMSwwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMUgxNDMuM3oKCQkJCSIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwLjgsNjAuNmMwLDAuMSwwLjEsMC4xLDAuMSwwLjJjMCwwLjEsMCwwLjItMC4xLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFzLTAuMiwwLTAuMy0wLjEKCQkJCWMtMC4yLTAuMS0wLjQtMC4zLTAuNS0wLjVjLTAuMS0wLjMtMC4yLTAuNi0wLjItMS4xYzAtMC4zLTAuMS0wLjYtMC4zLTAuN3MtMC41LTAuMi0wLjgtMC4yaC0ydjIuMmMwLDAuMSwwLDAuMy0wLjEsMC4zCgkJCQlzLTAuMiwwLjEtMC4zLDAuMWMtMC4yLDAtMC4zLDAtMC40LTAuMWMtMC4xLTAuMS0wLjItMC4yLTAuMi0wLjN2LTZjMC0wLjEsMC0wLjIsMC4xLTAuM2MwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgyLjgKCQkJCWMwLjQsMCwwLjcsMC4xLDEsMC4zYzAuMywwLjIsMC41LDAuNCwwLjcsMC43YzAuMiwwLjMsMC4zLDAuNywwLjMsMWMwLDAuNC0wLjEsMC43LTAuMywxcy0wLjUsMC42LTAuOCwwLjcKCQkJCWMwLjIsMC4xLDAuNCwwLjMsMC42LDAuNWMwLjEsMC4yLDAuMiwwLjUsMC4yLDAuOGMwLDAuNCwwLjEsMC42LDAuMSwwLjhjMCwwLjEsMC4xLDAuMiwwLjIsMC4zCgkJCQlDMTYwLjcsNjAuNSwxNjAuNyw2MC41LDE2MC44LDYwLjZ6IE0xNTksNTcuNWMwLjEtMC4xLDAuMy0wLjMsMC40LTAuNWMwLjEtMC4yLDAuMS0wLjQsMC4xLTAuN2MwLTAuMy0wLjEtMC42LTAuMy0wLjgKCQkJCWMtMC4yLTAuMi0wLjQtMC4zLTAuNy0wLjNoLTIuMnYyLjVoMi4zQzE1OC43LDU3LjYsMTU4LjksNTcuNiwxNTksNTcuNXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3My43LDYwLjRjMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjNjMCwwLjEsMCwwLjItMC4xLDAuM3MtMC4yLDAuMS0wLjMsMC4xaC0zLjVjLTAuMSwwLTAuMiwwLTAuMy0wLjEKCQkJCWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjN2LTZjMC0wLjEsMC0wLjIsMC4xLTAuM2MwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgzLjVjMC4xLDAsMC4zLDAsMC4zLDAuMXMwLjEsMC4yLDAuMSwwLjMKCQkJCWMwLDAuMSwwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWgtM3YyaDIuNWMwLjEsMCwwLjMsMCwwLjMsMC4xYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zYzAsMC4xLDAsMC4yLTAuMSwwLjMKCQkJCWMtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFoLTIuNXYyLjJoM0MxNzMuNSw2MC4zLDE3My42LDYwLjMsMTczLjcsNjAuNHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE4My4zLDYxLjFjLTAuNC0wLjEtMC43LTAuNC0xLjEtMC43Yy0wLjEtMC4xLTAuMi0wLjMtMC4yLTAuNGMwLTAuMSwwLTAuMiwwLjEtMC4zCgkJCQljMC4xLTAuMSwwLjItMC4xLDAuMy0wLjFjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjMsMC4yLDAuNSwwLjQsMC44LDAuNWMwLjMsMC4xLDAuNiwwLjIsMSwwLjJjMC40LDAsMC44LTAuMSwxLjEtMC4zCgkJCQlzMC40LTAuNCwwLjQtMC43YzAtMC4zLTAuMi0wLjYtMC40LTAuOGMtMC4zLTAuMi0wLjctMC4zLTEuMy0wLjVjLTAuNy0wLjEtMS4yLTAuNC0xLjYtMC43Yy0wLjQtMC4zLTAuNi0wLjgtMC42LTEuMwoJCQkJYzAtMC40LDAuMS0wLjcsMC4zLTFjMC4yLTAuMywwLjUtMC41LDAuOS0wLjdjMC40LTAuMiwwLjgtMC4yLDEuMi0wLjJjMC40LDAsMC44LDAuMSwxLjIsMC4yYzAuNCwwLjEsMC43LDAuMywwLjksMC41CgkJCQljMC4yLDAuMSwwLjIsMC4zLDAuMiwwLjRjMCwwLjEsMCwwLjItMC4xLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFjLTAuMSwwLTAuMiwwLTAuMi0wLjFjLTAuMi0wLjItMC40LTAuMy0wLjctMC40CgkJCQlzLTAuNi0wLjItMC45LTAuMmMtMC40LDAtMC44LDAuMS0xLjEsMC4zYy0wLjMsMC4yLTAuNCwwLjQtMC40LDAuN2MwLDAuMywwLjEsMC42LDAuNCwwLjhjMC4zLDAuMiwwLjcsMC4zLDEuMiwwLjQKCQkJCWMwLjUsMC4xLDAuOSwwLjIsMS4zLDAuNGMwLjMsMC4yLDAuNiwwLjQsMC44LDAuNnMwLjMsMC42LDAuMywxLjFjMCwwLjQtMC4xLDAuNy0wLjMsMWMtMC4yLDAuMy0wLjUsMC41LTAuOSwwLjcKCQkJCWMtMC40LDAuMi0wLjgsMC4yLTEuMiwwLjJDMTg0LjEsNjEuMywxODMuNyw2MS4yLDE4My4zLDYxLjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMDEsNTQuM2MwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3Y2YzAsMC4xLTAuMSwwLjMtMC4yLDAuNGMtMC4xLDAuMS0wLjIsMC4xLTAuNCwwLjFjLTAuMSwwLTAuMiwwLTAuMy0wLjEKCQkJCWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjR2LTIuNmgtMy41djIuNmMwLDAuMS0wLjEsMC4zLTAuMiwwLjRjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4xYy0wLjEsMC0wLjMsMC0wLjQtMC4xCgkJCQljLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC40di02YzAtMC4xLDAtMC4yLDAuMS0wLjNjMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3YyLjVoMy41CgkJCQl2LTIuNWMwLTAuMSwwLTAuMiwwLjEtMC4zYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xQzIwMC44LDU0LjIsMjAwLjksNTQuMywyMDEsNTQuM3oiLz4KCQk8L2c+CgkJPGcgY2xhc3M9InN0MSI+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02OS41LDI5LjJ2Nmg3LjNjMC42LDAsMS4xLDAuMiwxLjUsMC42YzAuNCwwLjQsMC42LDAuOSwwLjYsMS40YzAsMC41LTAuMiwwLjktMC42LDEuMwoJCQkJYy0wLjQsMC40LTAuOSwwLjYtMS41LDAuNmgtNy4zVjQ3YzAsMC42LTAuMiwxLjEtMC42LDEuNXMtMC45LDAuNi0xLjUsMC42Yy0wLjYsMC0xLjItMC4yLTEuNS0wLjZjLTAuNC0wLjQtMC42LTAuOS0wLjYtMS41CgkJCQlWMjcuNGMwLTAuNiwwLjItMS4xLDAuNi0xLjVjMC40LTAuNCwwLjktMC42LDEuNS0wLjZoMTFjMC42LDAsMS4xLDAuMiwxLjUsMC42czAuNiwwLjksMC42LDEuNGMwLDAuNS0wLjIsMC45LTAuNiwxLjMKCQkJCXMtMC45LDAuNi0xLjUsMC42SDY5LjV6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDUuNiw0Ni41YzAuMiwwLjMsMC4zLDAuNiwwLjMsMC45YzAsMC40LTAuMSwwLjgtMC40LDEuMWMtMC4zLDAuNC0wLjksMC42LTEuNiwwLjZjLTAuNSwwLTEtMC4xLTEuNS0wLjQKCQkJCWMtMS42LTAuOS0yLjQtMi44LTIuNC01LjdjMC0wLjgtMC4zLTEuNS0wLjgtMS45Yy0wLjUtMC41LTEuMy0wLjctMi4zLTAuN2gtNi40VjQ3YzAsMC42LTAuMiwxLjEtMC41LDEuNQoJCQkJYy0wLjMsMC40LTAuOCwwLjYtMS4zLDAuNmMtMC43LDAtMS4yLTAuMi0xLjctMC42cy0wLjctMC45LTAuNy0xLjVWMjcuNGMwLTAuNiwwLjItMS4xLDAuNi0xLjVjMC40LTAuNCwwLjktMC42LDEuNS0wLjZoOS44CgkJCQljMS4yLDAsMi4zLDAuMywzLjMsMWMxLDAuNiwxLjksMS41LDIuNSwyLjZjMC42LDEuMSwwLjksMi40LDAuOSwzLjdjMCwxLjEtMC4zLDIuMi0wLjksMy4zYy0wLjYsMS4xLTEuNCwxLjktMi40LDIuNgoJCQkJYzEuNCwxLDIuMiwyLjMsMi4zLDRjMC4xLDAuNCwwLjEsMC43LDAuMSwxLjFjMC4xLDAuNywwLjIsMS4yLDAuMywxLjVjMC4xLDAuMywwLjMsMC41LDAuNiwwLjdDMTA1LjIsNDYsMTA1LjQsNDYuMiwxMDUuNiw0Ni41egoJCQkJIE05OS4xLDM2LjRjMC40LTAuNCwwLjctMC45LDEtMS41YzAuMi0wLjYsMC40LTEuMywwLjQtMi4xYzAtMC42LTAuMS0xLjItMC40LTEuOGMtMC4yLTAuNS0wLjYtMS0xLTEuMwoJCQkJYy0wLjQtMC4zLTAuOC0wLjUtMS4yLTAuNWgtNy40VjM3aDcuNEM5OC4zLDM3LDk4LjcsMzYuOCw5OS4xLDM2LjR6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMzAuMyw0Ny4zYzAsMC42LTAuMiwxLjEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMywwLjZjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNHMtMC42LTAuNi0wLjgtMQoJCQkJbC0xLjgtNC4xaC0xMC4xbC0xLjgsNC4xYy0wLjIsMC40LTAuNCwwLjgtMC43LDFjLTAuMywwLjItMC43LDAuNC0xLjEsMC40Yy0wLjYsMC0xLTAuMi0xLjMtMC41Yy0wLjMtMC4zLTAuNS0wLjctMC41LTEuMwoJCQkJYzAtMC4yLDAtMC40LDAuMS0wLjZsOC41LTIwLjNjMC4yLTAuNSwwLjUtMC44LDAuOC0xLjFjMC40LTAuMiwwLjgtMC40LDEuMi0wLjNjMC40LDAsMC44LDAuMSwxLjEsMC40czAuNiwwLjYsMC44LDFsOC40LDE5LjkKCQkJCUMxMzAuMiw0Ni44LDEzMC4zLDQ3LDEzMC4zLDQ3LjN6IE0xMTYuMywzOS45aDYuOGwtMy40LThMMTE2LjMsMzkuOXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE1My45LDQ3LjNjMCwwLjYtMC4yLDEuMS0wLjYsMS40cy0wLjgsMC42LTEuMywwLjZjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGMtMC4zLTAuMi0wLjYtMC42LTAuOC0xCgkJCQlsLTEuOC00LjFoLTEwLjFsLTEuOCw0LjFjLTAuMiwwLjQtMC40LDAuOC0wLjcsMWMtMC4zLDAuMi0wLjcsMC40LTEuMSwwLjRjLTAuNiwwLTEtMC4yLTEuMy0wLjVjLTAuMy0wLjMtMC41LTAuNy0wLjUtMS4zCgkJCQljMC0wLjIsMC0wLjQsMC4xLTAuNmw4LjUtMjAuM2MwLjItMC41LDAuNS0wLjgsMC44LTEuMWMwLjQtMC4yLDAuOC0wLjQsMS4yLTAuM2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRzMC42LDAuNiwwLjgsMWw4LjQsMTkuOQoJCQkJQzE1My44LDQ2LjgsMTUzLjksNDcsMTUzLjksNDcuM3ogTTEzOS45LDM5LjloNi44bC0zLjQtOEwxMzkuOSwzOS45eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTc2LjUsMjguNmwtMTIuOSwxNi42aDEwLjhjMC42LDAsMS4xLDAuMiwxLjUsMC41YzAuNCwwLjQsMC42LDAuOCwwLjYsMS40YzAsMC42LTAuMiwxLTAuNiwxLjQKCQkJCWMtMC40LDAuNC0wLjksMC42LTEuNSwwLjZoLTE0LjljLTAuNiwwLTEuMS0wLjItMS41LTAuNmMtMC40LTAuNC0wLjYtMC45LTAuNi0xLjRjMC0wLjQsMC4yLTAuOSwwLjUtMS4zbDEyLjktMTYuNmgtOS44CgkJCQljLTAuNiwwLTEuMS0wLjItMS41LTAuNWMtMC40LTAuNC0wLjYtMC44LTAuNi0xLjRjMC0wLjYsMC4yLTEsMC42LTEuNHMwLjktMC41LDEuNS0wLjVoMTMuOWMwLjUsMCwxLDAuMiwxLjUsMC42CgkJCQlzMC43LDAuOSwwLjcsMS40QzE3Ni45LDI3LjgsMTc2LjgsMjguMiwxNzYuNSwyOC42eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjAyLjgsNDMuNGMtMSwxLjktMi40LDMuMy00LjEsNC40Yy0xLjgsMS4xLTMuNywxLjYtNS45LDEuNnMtNC4yLTAuNS01LjktMS42Yy0xLjgtMS4xLTMuMS0yLjYtNC4xLTQuNAoJCQkJYy0xLTEuOS0xLjUtMy45LTEuNS02LjJjMC0yLjIsMC41LTQuMywxLjUtNi4yczIuNC0zLjMsNC4xLTQuNGMxLjgtMS4xLDMuNy0xLjYsNS45LTEuNnM0LjIsMC41LDUuOSwxLjYKCQkJCWMxLjgsMS4xLDMuMSwyLjYsNC4xLDQuNGMxLDEuOSwxLjUsMy45LDEuNSw2LjJDMjA0LjMsMzkuNSwyMDMuOCw0MS41LDIwMi44LDQzLjR6IE0xOTguOSwzMy4xYy0wLjYtMS4yLTEuNS0yLjItMi42LTIuOQoJCQkJYy0xLjEtMC43LTIuMy0xLjEtMy43LTEuMWMtMS40LDAtMi42LDAuNC0zLjcsMS4xYy0xLjEsMC43LTEuOSwxLjctMi41LDIuOWMtMC42LDEuMi0wLjksMi42LTAuOSw0LjFjMCwxLjUsMC4zLDIuOSwwLjksNC4xCgkJCQljMC42LDEuMiwxLjQsMi4yLDIuNSwyLjljMS4xLDAuNywyLjMsMS4xLDMuNywxLjFjMS40LDAsMi42LTAuNCwzLjctMS4xYzEuMS0wLjcsMS45LTEuNywyLjYtMi45YzAuNi0xLjIsMC45LTIuNiwwLjktNC4xCgkJCQlDMTk5LjksMzUuNywxOTkuNSwzNC4zLDE5OC45LDMzLjF6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=" alt="" />

                <div className="mainmiddlefooterleftparag">
                    <p>Order online vegetables & fruits
                        directly from the farm. Fraazo is
                        online platform that allows customer
                        to get farm fresh produce directly
                        from farmers.</p>
                </div>
                </div>
                <div className="mainmiddlefootermiddle1">
                   <h5 className="mainmiddlefootermiddle1heading">Useful Links</h5>
                   <p className="mainmiddlefootermiddle1parag">Privacy Policy</p> 
                   <p className="mainmiddlefootermiddle1parag">FAQ</p> 
                   <p className="mainmiddlefootermiddle1parag">Terms & Conditions</p>
                </div>
                <div className="mainmiddlefootermiddle2">
                <h5 className="mainmiddlefootermiddle1heading">Cities We Serve</h5>
                   <p className="mainmiddlefootermiddle1parag">Mumbai</p> 
                   <p className="mainmiddlefootermiddle1parag">Hyderabad</p> 
                   <p className="mainmiddlefootermiddle1parag">Bangalore</p>
                   <p className="mainmiddlefootermiddle1parag">Delhi</p> 
                   <p className="mainmiddlefootermiddle1parag">Noida</p> 
                   <p className="mainmiddlefootermiddle1parag">Gurugram</p>
                   <p className="mainmiddlefootermiddle1parag">Pune</p> 
                </div>
                <div className="mainmiddlefooterright">
                <h5 className="mainmiddlefootermiddle1heading">Connect with us</h5>
                   <p className="mainmiddlefootermiddle1parag">support@fraazo.com</p> 
                   <p className="mainmiddlefootermiddle1parag">+91 9152291522</p> 
                   <p className="mainmiddlefootermiddle1parag">102, We Work Vijay Diamond, A3 & B2,
                        Cross Road B, MIDC, Andheri (East),
                        Mumbai City MH 400093.</p>
                   <p className="mainmiddlefootermiddle1heading">Download The App</p> 
                   <div>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAuCAYAAADz/1GhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1aSURBVHgB7VxpcFRVFv7SWcgGspuwhgLZ0WEZQCgFRBBlExG0QDCMSg0oMKWIA0XJDxYVIpsyohRCDbsICCpCWE1YDFsIEzaFiUYgkIQlJJA91/sd85pOJ92EdGMW3ld10i9vue/1u2f5zrknAUyYMGHChAkTJkyYMGGiPMHjHs4L1tJOSwMtPjBR3pClJV7LUS2XtSi4CQFaxms5mT+oKeVXsrWc0jI1f17dgjlaMgEoUyqMZObPq8uYAECZUmFlAu4CZxyELuiQlpYwUVHBcNNJS5qjE7ycXNxWS2OUMjp16oTnn38eubm52LZtG3766Sc88cQT6NKlC/Ly8vDzzz+jRo0aqFmzJjw8PJCQkIA1a9YgKysL3bp1Q0ZGhnx6e3vLvuXLl+Py5csydvfu3dGnTx9kZmZiy5YtOHr0KHr06CHXHDx4UMbs3LkzvvvuO1RQ1NPSUctuRydYnFxcH6WcrXAC33rrLWzYsAGbNm1C7dq1Zf9zzz2Ha9euYe/evYiKisKhQ4dkkqkABw4cQHp6Ovz9/dGvXz/reQMHDsTu3buRmpoqYwwYMAAvv/wy1q5dK4r36quvolGjRjL2Bx98IPei4j3zzDOowGCUCHZ2gjMPUgnFT4PvC15//XW88847uHLliniHY8eOyf6cnByZeAon/MKFC2jSpIkoyZkzZwqMERcXh7NnzyIlJUUUycCoUaMQGhoq+40xR48eLUq2efNm2aZiVnB4avF2doIzD1Lq8PHxwfXr1/Hwww9j4cKF4urnz58v4aJ///547bXX8Mgjj6Ak8PT0RFrandCbnJwsHoOgRwkICED79u3xoKNMK0hkZCTefvtt3Lp1CxMnTrSGFHqKL7/8EtOnT8epU6dQEhw+fBhvvPEGfH19ERgYiLFjx+Krr76SY+Q7n3/+OV566SU86CjTCvLFF1/IZIWFheGTTz5BlSpV8PXXX4vlMwRw3/Dhw+Vc8g6DXxhISkqCUkq2f/311wLH5s6di+rVq2PevHlYsGABfv/9d+zatUs8CcMMz9+xYwcuXboEE0UjFGUkX9fuXmnlsP7u5eWlNAkV0eFG9lksFuu2IZUqVVKau1i3HY1duXLlAmPr8GMdU4e5MvEO7qOEwgmckdRiwdPXH811NnD9RBQuHTuJ+wGGGFuQUFJswZSXYguGoqK27za27Zj0Jg8yXFaQ6q3bI6j3cPxtxGBknT+CiLnLkHj2N6trN1G+4bKCWHy8YPH1RHKqPxq06YhRq5rh/7sOInLpJiScjYe7wMyFdYr69etLBnLx4kX88ssvpWbhfB6m3tnZ2RXaGFxWEA8vD3j6e8p2QmoA/GoB7V/ojuadm+L0jiiEL96ClKQbKCk0D0DPnj2FlD711FOoVq2aTAhrI6xrkKiSXP6V8PPzw6JFi2R7woQJhcixM7AgxwKeLUiMWXthek00b94c06ZNk0yLZLo04boH0brh5XsnGYpPrYxKuvTSMCQIIWP6o9sLnRG5ehc2LNiMnKycex1eUtGZM2dCE0ls3LhRSuDE448/LiX4Nm3a4NFHHy3EJe4nNOFF27ZtJXO6V/B5X3zxRavXoRcihg0bhvfeew+LFy8WIxg0aJCU/EsbrnsQTw94aQ8iX5M/9Pc+n14VlX3z4OeVjpp1a2DY5CHoNaQTVs5aj31bo4utKPQc9BAMJ0OGDMGePXusx1g4e/rpp8XF/5XK4S5wGYF1Hp01oVevXli5cqWk3OvXr0dZgltCjJf/nx4kXz8EZzKrw9vnOkK80mRvoxb1MH3VePwWEYP/TluLg7FXkHo72+G4fHEshDGToBexVQ4DO3fudHg9eQq9DpWHSlQU6AlYKGOIsM+ADLCIRisvThgx7knP4ihrMkAPQuGzbd26Fd98842U/1u0aCG1H3uwmkyl4mdiYiKOHz8uSwgco06dOvK+WLOxzcIeeughVK1aFTdv3pSKdEngcqHMYtEK4mcR8cz/pOT5euNMTg0k5vrDWNLxUXkYWMcDm2b1xtLJ3fH3lrVhcbDawxJ669atZfWWi2zFfx6LxHgWuVh55SrtK6+8IvsNsIxO7sDjVLx169bJiq8tWET78MMP5Rxyg/Hjx2POnDlS2TXCgi1Ylqf1//jjj7IkwDBie8+7PTPvR9y+fbvQ8eDgYFEgLiyyqLd69Wp8++23EmJ5LZ9r+/btBZYGqKz0vnx3riwZuKwghgcpSnL9vHECQUhQAaiUlYnm52IRmJoCf18vDOnRCHsX9sOSf3dDzaq+hcZt2rSpkEFmKvbWvWrVKpkMWyGp48uaMWOGrPwy46GlUcmWLVuGjz/+WK5lfKdCcE2HldkbN27Iii0VqW/fvnJOgwYNxKonTZokFkmL5vUs93MNyB68jhPBNgRWZOvVqychg6vFjsA2Aioyucbs2bNlm9Vb+6UDKiNbEPhM/G5sfyBXYSsCFYPegwpMYjtu3DirUrZq1UqUlApn8LaSwA0k1aMASbVHrtbBk+k10PfoPlSpllLgGBXlH32b4erNDExaFFXgGF0nFaMoa6XlcDnfFo0bN5ZMgJ4hNjZWXjz7Prhszx4Qtg3ws2vXrsJdlixZgsmTJ0sIIsmlRZIg0nO9+eab6NChA6ZOnYpPP/1UwsDIkSPFIu3B55s1a5YoESeZK87kFFwSePfdd8WTseRvDxJvQ/G5KMnwwLUfe2LK98D+FrYxPPbYY6Ig5GR8XnpG7uM9zp8/L4rasmVL+f5sZ6CBcX3JFY7mBpKqawIBng6PByakocecCNyMS8GtFxQCmt2Z8DTNQVaEn8PC9YUrsCdPnpQ1l3bt2glPsH1xtCYDjMk8l2kvwwQVhxZprL3Ex8eL9dMK6SmYKhO0vqtXr8o202V6FVogJ4ATzEnggiDjN8HtKVOmFHrOunXrioIxBDCzoULRmk+cOIHPPvvMYSby0UcfyaRSSZjmkrA64jlUanok3ovnUCnp/fhZq1Yt+e4k7Qw/TKPpTWkQbH2gcrkC1xVEP6SHd9FEwj8pHV3nH0HwiUTk6iWRhM3ZqDfUAktdC8IPXcDsNTHYF5OAoupM7ONgHYBumxkMX5CRGhoTS9CNErQikk7CflIMwkhF4zn0CPbE1UhZeZwWzWtsQxvvbV/eJ1gwI9hoROX6/vvv8f7770vIcUZUw8PDRSnuBio8sxsqAvnPvn375PnYJ8P3YjwbFZQej96VXXU0HHpUKqErcH011wHJ9EvKQIcwzUCOXLHuy0rJw7r/nMeAidswaMp2RB4vWjkITg4tljGUHoGhgxmCdXztPsn62f117tw5rFixwtoKMGLECOvE8QWzb4Sgp6CrZmbCDjMD9EiDBw+We8XExCA6OhoNGzYUnmDgySefFG5hD4YGCrMINiAx4/rhhx/kWvIfV8FnpeegUdBI+GwMWawo24Iej16QjVPkTvR8DKOuVnld9iBFwTM9Fx1mxKJu9GXrvrjbKVh+4Qh2J/2GlJzilccZzzm5JJmsKHKbfaO0ZLp1xlu+AHIGvrT9+/cjIiJCJp9ElRbK0NK7d28hasxYqABDhw6VDIXxmxZG7kAOw7Sa7prun72qDCu8N0MdC1m0XHtQIanAtHJWV3kNrZeunlyAz8LOt5KCHW8MVwyPVBAaw7PPPouQkJAC5xk9LDQO3p8lACrT/UQoirFc3HhoHzVaxVplXFK0Wjp+rdrWdZ7a0WWGWtn+n2pk/Y7K08NS4iVp/TKU5hHq9OnTSmcmSiuD0i9KLV26VOmJLXCutjgVFhamNAeRc7UCKG1JSnsc6zk6Q1KaRCptdUoTWRlXu+8C43Ts2FHpEr4cp+gsR+laguzT9QWlFVDptFNaBdgioL2Z0hMiz6Y9itLuXWkFLvRdeB8dPpX2MA6/r85AlOYPSmda8rvOVOR+WtHkGXR4Utq7yjg6UyrQqqBTbKW9r9KE1S3L/R53UZBluAu0gqDnujDZ9knOQevpcQg6mqStPBk7E/djw6VIJGXehDtACw4KCpJUjhmKs1I0C0RMBUkAmcoWBWY4DFuM2bb1B/IQunX2utIa6bF4b3IicgtH6SvDDF0/x6Incif4nRk+WMOhZyqq+MciG7kI+RTJvaPinx1GaVnu6KDbQowlQ6HZzAQERl3D7qsHsDJ+I65luUcxDHDllllJcUClcKQYBlgnodiDYYHummGDn1QQZjgkiiyEOQLPI7m+HzD+xMMZyIGYpo8ZM6a4yuESQlEc9z+wpxqbHKPmTAhXY5r8S9XxC1Y6rylxOCkLorMdpesHSk+4hAztDZS2WKULUgU628qSMAwxrFK017uXa0PhBM48SG7+AE7/9CEh4jCiQ8OwJ/J/iEs7i4zce1/hLGtg6GJ7AYtRTLOZytNzsNpq1EXKGhgqSahJaIvyig7A+c1FCcGKUgbKmKWY4lZJz59nh3BWBzmOP/+PhImKi4tajjk7wZmCMHkvW80JJtyNVVpK3u6n4aeFfXDlyW2aUjzZlj+/LiNQyxL8+d9pytMLMKVoyc6fz0AUA/fyx9khWtgM0UqLL0yUNzDh4LI5u6/YdKJgwoQJEyZMlB7+AOzLg6aoBSimAAAAAElFTkSuQmCC" alt="broken" />
                   <img src="Data:image/png;base64,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" alt="broken" />
                   </div>
                </div>
                
            </div>
        </div>

        <div className="bottomfooter">
            <div className="bottomfooterheading">
                <p>Fresh Fruits & Vegetables Grocery Shopping Online</p>
            </div>
            <div className="bottomfooterparag">
                <p>The quality of fruits & vegetables is synonymous with its freshness, while getting fresh fruits and vegetables is a tedious task at times but with Fraazo you can get it delivered at your doorstep. Fraazo brings a wide range of farm fresh fruits, vegetables and dairy products to you, all in just a click. We currently serve about more than 3lacs+ happy customers in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo has made online shopping of fresh produce much easier with its hassle-free home delivery options. You can choose the delivery slot as per your choice and schedule your order accordingly. Or you can simply opt for the option of 90 mins Express Delivery and get your order delivered in not more than 90 mins. The farm fresh fruits and vegetables on Fraazo are available at best prices compared to other vendors & supermarkets. Plus with so many exciting offers, one can save up to 20% on their Monthly grocery budgets. No need to wait in long queues in crowded supermarkets or local mandis for getting the best prices on veggies. Kick the stress out & just Fraazo your dose of freshness with savings at the comfort of your home. Fraazo directly sources fresh fruits and veggies from an extensive network of farmers across Maharashtra, hence bringing you fresh produce straight from farm to table in less than 12 hours. With our Safe & Hygienic packaging and minimal multiple handling, we ensure you get the best quality fresh produce.<br/>
                    <br></br>The fruits and vegetables are 100% hand-picked fresh from farm, while some products are hydroponically-grown. The wide range of fruits and veggies on Fraazo include more than 100+ farm fresh vegetables and fruits, starting from regular veggies like dudhi, cauliflower, beetroot, cabbage, etc. to exotic veggies like broccoli, lettuce etc. We also provide the essential vegetable combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more. There are a lot of exciting deals on vegetables & fruits, every day of the week, the major highlights being Monday Mandi, Veggie Wednesday, Freelivery Thursday & Fruit Friday.For payments, you can choose from the multiple payment options as Fraazo accepts Debit card, Credit card, UPI options like iMobile, Google Pay, 8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo, NetBanking and Cash on Delivery (COD). If you ever have an issue with missing items or any quality issue, you can raise your concern with us in 48 hrs & we shall refund/ replace your product with “no-questions-asked-policy”. You can simply connect with our Customer Support team via Chat Support or Call on 9152291522.</p>
            </div>

             <hr className="footerbottomline"/>

             <div className="copyright">
                <p>© Copyrights 2021 - 2022. Fraazo. All Rights Reserved.</p>
             </div>

        </div>

        </div>
    )

}