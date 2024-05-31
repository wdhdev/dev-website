fetch("https://api.lanyard.rest/v1/users/853158265466257448")
    .then((res) => res.json()).then((res) => {
        switch (res.data.discord_status) {
            case "online":
                document.getElementById("pfp").style.border = "4px solid #46A55F";
                break;
            case "idle":
                document.getElementById("pfp").style.border = "4px solid #F5A626";
                break;
            case "dnd":
                document.getElementById("pfp").style.border = "4px solid #E74044";
                break;
            default:
                document.getElementById("pfp").style.border = "4px solid #757F8D";
        }
    })
