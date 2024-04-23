AFRAME.registerComponent('drive', {
    init: function(){
        var gameStateValue = this.el.getAttribute("game")
        if (gameStateValue.gameState == 'play') {
            this.driveCar();
        }
    },
    driveCar: function(){
        var wheel = document.querySelector("#steeringwheel")

        var wheelRotation = 0

        window.addEventListener('keydown',(e) => {
            if(e.code == 'ArrowLeft' && wheelRotation < 40){
                wheelRotation += 5
                wheel.setAttribute('rotation', {x: 0, y: 0, z: wheelRotation})
            }
            if(e.code == 'ArrowRight' && wheelRotation > -40) {
                wheelRotation -= 5;
                wheel.setAttribute('rotation', {x: 0, y: 0, z: wheelRotation})
            }
        })
        
    }
})