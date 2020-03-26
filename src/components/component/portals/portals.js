import React from "react";
import ReactDOM from "react-dom";

/**
 * 一个 portal 的典型用例是当父组件有 overflow: hidden 或 z-index 样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框：
 */
class Portals extends React.Component {
  render() {
    const domNode = document.body;
    return ReactDOM.createPortal(this.props.children, domNode);
  }
}

export default Portals;
