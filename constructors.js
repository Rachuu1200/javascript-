class Railwayform {
    constructor(givename,trainno) {
        console.log("Constructor called...."+ givename + " "+ trainno)
        this.name =givename
        this.trainno = trainno
    }
    submit() {
        console.log(this.name + ": Your form is submitted for train number:" + this.trainno)

    }
    cancel() {
        console.log(this.name + ": Your form is cancelled for train number:" + this.trainno)
    }
}

let rachuform =   new Railwayform("Rachu", 3438754)

let rachanaform1 = new Railwayform("Rachana",23445)
let rachanaform2 = new Railwayform("Rachana",2347685)


rachanaform1.submit()
rachuform.submit()
rachanaform2.cancel()

