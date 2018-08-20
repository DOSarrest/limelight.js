document.addEventListener("DOMContentLoaded", function demoInit() {
  // (() => {
  //   var demoBasic = document.querySelector(".js-demo-basic");
  //   var trigger = demoBasic.querySelector(".js-demo-basic__trigger");
  //   const inst = new Limelight(
  //     document.querySelector(".js-demo-basic__target")
  //   );
  //
  //   trigger.addEventListener("click", function(e) {
  //     e.preventDefault();
  //
  //     inst.open();
  //   });
  // })();
  //
  // (() => {
  //   var demoAutoAdjust = document.querySelector(".js-demo-auto-adjust");
  //   var trigger = demoAutoAdjust.querySelector(".js-demo-auto-adjust__trigger");
  //   const inst = new Limelight(
  //     document.querySelector(".js-demo-auto-adjust__target")
  //   );
  //
  //   trigger.addEventListener("click", function(e) {
  //     e.preventDefault();
  //
  //     inst.open();
  //
  //     // setTimeout(() => {
  //     //   inst.refocus(document.querySelector('.js-demo-basic__target'));
  //     // }, 2000);
  //
  //     // setTimeout(() => {
  //     //   document.querySelector('.intro').style.minHeight = '10vh';
  //     // }, 3000);
  //   });
  // })();

  (() => {
    var demo = document.querySelector(".js-demo-goto");
    var trigger = demo.querySelector(".js-demo-goto__trigger");
    var initial = document.querySelector(".js-demo-goto__target")
    var target = demo.querySelector(".js-demo-goto__dest");

    const inst = new Limelight(
      initial
    );

    trigger.addEventListener("click", function(e) {
      e.preventDefault();

      inst.refocus(initial, false);

      inst.open();

      const x = setTimeout(() => {
        inst.refocus(target, true);
      }, 1000);

      // inst.on('close', function() {
      //   clearTimeout(x);
      // });

      // setTimeout(() => {
      //   document.querySelector('.intro').style.minHeight = '10vh';
      // }, 3000);
    });
  })()
});
