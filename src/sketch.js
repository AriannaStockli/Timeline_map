import { initCamera } from "./camera.js";

let indexImg = 0;
let slideChangeInProgress = false;

const slide = [
    "1860",
    "1870",
    "1880",
    "1890",
    "1900",
    "1910",
    "1920",
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
    "2010",
    "2020"
];

// Configurazione dell’elemento video
const videoConfig = {
    width: 640, height: 480, fps: 60
}

// Configurazione Media Pipe
// https://google.github.io/mediapipe/solutions/hands
const mediaPipeConfig = {
    runtime: "mediapipe",
    modelType: "full",
    maxHands: 2,
    solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
}

const video = document.querySelector("video")
const canvas = document.querySelector("canvas")
canvas.width = videoConfig.width
canvas.height = videoConfig.height
const ctx = canvas.getContext("2d")

initCamera(
    document.querySelector("video"),
    videoConfig.width,
    videoConfig.height,
    videoConfig.fps
).then(video => {
    video.play()
    video.addEventListener("loadeddata", event => {
        console.log("Camera inizializzata.")
        boot()
    })
})

async function createDetector() {
    return window.handPoseDetection.createDetector(window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig)
}

async function boot() {

    // Carica modello handpose
    console.log("Carico modello mediaPose...")
    const detector = await createDetector()
    console.log("Modello caricato.")


    const estimator = new fp.GestureEstimator([
        fp.Gestures.VictoryGesture,
        fp.Gestures.ThumbsUpGesture,
        //fp.Gestures.PointingUpGesture
    ]);

    requestAnimationFrame(loop)

    async function loop() {

        requestAnimationFrame(loop)

        const hands = await detector.estimateHands(video, { flipHorizontal: true })

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // Mappa dei landmarks della mano:
        // https://developers.google.com/mediapipe/solutions/vision/hand_landmarker
        for (const hand of hands) {

            const handedness = hand.handedness // Left : Right
            const keypoints3D = hand.keypoints3D.map(keypoint => [keypoint.x, keypoint.y, keypoint.z])
            const pose = await estimator.estimate(keypoints3D, 8.5)

            const name = pose.gestures[0]?.name
            const score = pose.gestures[0]?.score

            console.log(name)

            if (name == "thumbs_up" && !slideChangeInProgress && indexImg < slide.length) {
                indexImg += 1;
                console.log(indexImg);
                slideChangeInProgress = true; // Set the flag to indicate a slide change is in progress
                document.getElementById("slide").src = "assets/mappa_" + slide[indexImg] + '.png';
                setTimeout(() => {
                    slideChangeInProgress = false; // Reset the flag after a short delay to allow the next slide change
                }, 1000); // Adjust the delay duration as needed
            }

            if (name == "victory" && !slideChangeInProgress && indexImg > 0) {
                indexImg -= 1;
                console.log(indexImg);
                slideChangeInProgress = true; // Set the flag to indicate a slide change is in progress
                document.getElementById("slide").src = "assets/mappa_" + slide[indexImg] + '.png';
                setTimeout(() => {
                    slideChangeInProgress = false; // Reset the flag after a short delay to allow the next slide change
                }, 1000); // Adjust the delay duration as needed
            }

        }
    }
}
    
