(() => {
     const dropZoneContainer = document.querySelector(".musicBox"),
          dragPieces = document.querySelectorAll(".puzzlePieces"),
          dropPieces = document.querySelectorAll(".dropZone");

     // debugger;

     function dragging(event) {
          console.log("dragStart");
          event.dataTransfer.setData("saveID", this.id);
     }

     function draggedOver(event) {
          event.preventDefault();
          console.log("dragOver");
     }

     function dropped(event) {
          event.preventDefault();
          console.log("drop");

          if (this.childElementCount > 0) { return; }

          let targetData = event.dataTransfer.getData("saveID");
          console.log("I'm dragging", targetData, "piece to here.");

          event.target.appendChild(document.querySelector(`#${targetData}`));
     }

     dragPieces.forEach(piece => piece.addEventListener("dragstart", dragging));

     dropPieces.forEach(zone => {
          zone.addEventListener("dragover", draggedOver);
          zone.addEventListener("drop", dropped);
     })

})();