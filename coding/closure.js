var globalVar = "z";

(function outerFunc(outerArg) {
  var outerVar = "x";
  (function innerFunc(innerArg) {
    var innerVar = "y";
    console.log(
      "outerarg = " +
        outerArg +
        "\n" +
        "outervar = " +
        outerVar +
        "\n" +
        "innerarg = " +
        innerArg +
        "\n" +
        "innerFunc = " +
        innerVar +
        "\n" +
        "globalvar = " +
        globalVar
    );
  })(5);
})(7);
