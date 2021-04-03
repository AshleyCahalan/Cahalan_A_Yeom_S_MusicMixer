(() => {
     const dropZoneContainer = document.querySelector(".musicBox"),
          dragPieces = document.querySelectorAll(".puzzlePieces"),
          dropPieces = document.querySelectorAll(".dropZone");

     // debugger;

     function dragging(event) {
          console.log('started dragging puzzle pieces');
          event.dataTransfer.setData("saveID", this.id);
     }

     function draggedOver(event) {
          event.preventDefault();
          console.log('dragged over puzzle pieces');
     }

     function dropped(event) {
          event.preventDefault();
          console.log('dropped puzzles on a board');

          let targetPieces = event.dataTransfer.getData("saveID");
          console.log("Dragging a piece to here", targetPieces);
     }

     dragPieces.forEach(piece => piece.addEventListener("dragging", dragging));

     dropPieces.forEach(zone => {
          zone.addEventListener("dragover", draggedOver);
          zone.addEventListener("drop", dropped);
     })

})();