function babelify({ types: t }) {
  return {
    visitor: {
      ExpressionStatement(path) {
        if (path.node.expression.operator !== "===") {
          return;
        }

        path.node.expression.left.value = t.identifier("hoge").name;
        path.node.expression.right.value = t.identifier("fuga").name;
      }
    }
  };
}

module.exports = babelify;
