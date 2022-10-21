// import dayjs from "dayjs";


// // Dayjs
// dayjs.locale("pt-br");
// let isBetween = require("dayjs/plugin/isBetween");
// let today = dayjs();
// let month = dayjs().month();
// export let monthName = dayjs().format("MMMM");

// // Episodes
// let episodesTp = [];
// let episodesAb = [];
// // let episodesTpCurrentMonth = [];

// // Fetch: Aventura Bíblica
// const getEpisodesAb = async () => {
//     return await fetch("assets/json/abEpisodes.json").then((data) =>
//         data.json()
//     );
// };

// // Fetch: Terra Prometida
// const getEpisodesTp = async () => {
//     return await fetch("/api/episodes").then((data) => data.json());
// };

// // Render: Aventura Bíblica
// function renderEpisodeAb(data, type = ".aventura-biblica") {
//     // check
//     if (data == null) return;

//     // c(type + " .episode-title h4").innerHTML = data.name;
//     // c(type + " .thumbnail img").src = data.img;
//     // c(type + " .bt-download.item-1 a").href = data.download;
//     // c(type + " .bt-material.item-2 a").href = data.materiais;
// }

// // Render: Terra Prometida
// function renderEpisodeTp(data, type = ".terra-prometida") {
//     // check
//     if (data == null) return;

//     // c(type + " .episode-title h4").innerHTML = data.name;
//     // c(type + " .thumbnail img").src = data.img;
//     // c(type + " .bt-download.item-1 a").href = data.download;
//     // c(type + " .bt-slides.item-2 a").href = data.slides;
//     // c(type + " .bt-youtube.item-3 a").href = data.youtube;
//     // c(type + " .bt-lifekids.item-4 a").href = data.lifekids;
//     // c(type + " .week-actual h4").innerHTML = dayjs(data.showAt).format(
//     //     "DD/MMMM"
//     // );
// }

// // Get current episodes
// function getCurrentTpEpisode(episodesTp) {
//     return episodesTp.filter((data) => {
//         // Convert date in dayjs
//         const episodeDate = dayjs(data.showAt);
//         // Get date of start period
//         const start = episodeDate.subtract(2, "day").format("YYYY/MM/DD");
//         // Get date of end period
//         const end = episodeDate.add(4, "day").format("YYYY/MM/DD");
//         // init
//         let showThisEpisode = false;
//         // logic
//         // if (window.today.isBetween(start, end, "day", "[]")) {
//             showThisEpisode = true;
//         }

//         return showThisEpisode;
//     })[0];
// }

// function getCurrentAbEpisode(episodesAb) {
//     return episodesAb.filter((episodeAb) => {
//         const episodeMonth = episodeAb.showAt;
//         let showThisEpisode = false;

//         // Check episode's month
//         if (episodeMonth === month) {
//             showThisEpisode = true;
//         }
//         return showThisEpisode;
//     })[0];
// }

// getEpisodesTp().then((episodesTp) => {
//     // window.episodesTp = episodesTp;

//     const episodeToShow = getCurrentTpEpisode(episodesTp);

//     renderEpisodeTp(episodeToShow);
// });

// getEpisodesAb().then((episodesAb) => {
//     // window.episodesAb = episodesAb;

//     const episodeToShow = getCurrentAbEpisode(episodesAb);

//     renderEpisodeAb(episodeToShow);
// });

// function prevWeek() {
//     // window.today = dayjs(window.today).subtract(1, "week");

//     const episodeToShow = getCurrentTpEpisode(episodesTp);

//     renderEpisodeTp(episodeToShow);
// }

// function nextWeek() {
//     // window.today = dayjs(window.today).add(1, "week");

//     const episodeToShow = getCurrentTpEpisode(episodesTp);

//     renderEpisodeTp(episodeToShow);
// }
