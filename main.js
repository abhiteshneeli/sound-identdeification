function startclassifier()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/f6dJFFK1e/model.json',model_loaded);

}

function model_loaded()
{
    console.log("model loded");
}