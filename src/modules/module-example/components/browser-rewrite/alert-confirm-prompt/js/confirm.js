/**
 * 自用alert弹窗
 * @param {String} content 弹窗内容
 * @param {String} title 弹窗title
 * @param {function} callback 回调函数
 */
export default function(content, title, callback) {
  try {
    let container = window
    let findparent = function() {
      if (container.parent !== container) {
        container = container.parent
        findparent()
      }
    }
    findparent()
    // 判断同时有几个alert(confirm prompt 一起计算)在弹出状态
    // 一层最多存在的数量
    container.calertDefaultTop === undefined ? container.calertDefaultTop = container.innerHeight * 0.1 : null
    container.calertDefaultLeft === undefined ? container.calertDefaultLeft = (container.innerWidth - 350) / 2 : null
    container.calertNowTop === undefined ? container.calertNowTop = container.innerHeight * 0.1 : null
    container.calertNowLeft === undefined ? container.calertNowLeft = (container.innerWidth - 350) / 2 : null

    let widthAdd = 30
    let heightAdd = 30
    // 加个锁

    let top_ = container.calertNowTop
    let left_ = container.calertNowLeft
    while ((top_ >= container.innerHeight - 150) || (left_ >= container.innerWidth - 350)) {
      container.calertDefaultLeft += widthAdd * 2
      if (container.calertDefaultLeft >= container.innerWidth - 350) {
        container.calertDefaultLeft = (container.innerWidth - 350) / 2
      }
      container.calertNowTop = container.calertDefaultTop
      container.calertNowLeft = container.calertDefaultLeft
      top_ = container.calertNowTop
      left_ = container.calertNowLeft
    }
    container.calertNowTop += heightAdd
    container.calertNowLeft += widthAdd
    let cconfirm = document.createElement('div')
    cconfirm.className = 'cconfirm'
    cconfirm.style.position = 'absolute'
    cconfirm.style.height = '150px'
    cconfirm.style.width = '350px'
    cconfirm.style.borderRadius = '6px'
    cconfirm.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.50)'
    cconfirm.style.zIndex = '10000000000'
    cconfirm.style.top = top_ + 'px'
    cconfirm.style.left = left_ + 'px'

    let cconfirmTitle = document.createElement('div')
    cconfirmTitle.className = 'cconfirmTitle'
    cconfirmTitle.style.position = 'relative'
    cconfirmTitle.style.height = '30px'
    cconfirmTitle.style.width = '100%'
    cconfirmTitle.style.borderRadius = '6px 6px 0px 0px'
    cconfirmTitle.style.backgroundColor = '#f0f0f0'

    let cconfirmTitleText = document.createElement('div')
    cconfirmTitleText.style.paddingTop = '5px'
    cconfirmTitleText.style.paddingLeft = '10px'
    if (title) {
      cconfirmTitleText.innerText = title
    } else {
      cconfirmTitleText.innerText = '提示'
    }

    cconfirmTitle.appendChild(cconfirmTitleText)

    let cconfirmTitleClose = document.createElement('div')
    cconfirmTitleClose.style.position = 'absolute'
    cconfirmTitleClose.style.top = '5px'
    cconfirmTitleClose.style.right = '5px'
    cconfirmTitleClose.style.height = '20px'
    cconfirmTitleClose.style.width = '20px'
    cconfirmTitleClose.style.cursor = 'pointer'
    cconfirmTitleClose.onclick = function() {
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement.parentElement)
    }

    let cconfirmTitleCloseCanvas = document.createElement('canvas')
    cconfirmTitleCloseCanvas.className = 'cconfirm-close-canvas'
    cconfirmTitleCloseCanvas.style.height = '20px'
    cconfirmTitleCloseCanvas.style.width = '20px'
    // 异步
    setTimeout(function() {
      let context = cconfirmTitleCloseCanvas.getContext('2d')
      cconfirmTitleCloseCanvas.height = 20
      cconfirmTitleCloseCanvas.width = 20
      context.translate(10, 10)
      let i = 0
      while (i < 4) {
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(7 * ((i < 2) ? 1 : -1), 7 * ((i % 2 === 0) ? 1 : -1))
        context.closePath()
        context.strokeStyle = '#000000'
        context.stroke()
        i++
      }
    }, 10)

    cconfirmTitleClose.appendChild(cconfirmTitleCloseCanvas)
    cconfirmTitle.appendChild(cconfirmTitleClose)

    let cconfirmContent = document.createElement('div')
    cconfirmContent.className = 'cconfirmContent'
    cconfirmContent.style.position = 'relative'
    cconfirmContent.style.height = '120px'
    cconfirmContent.style.width = '100%'
    cconfirmContent.style.backgroundColor = '#FFFFFA'
    cconfirmContent.style.borderRadius = '0px 0px 6px 6px'

    let cconfirmContentText = document.createElement('div')
    if (!content) { content = '第一个传入参数不能为空值' }
    cconfirmContentText.style.maxHeight = '80px'
    cconfirmContentText.style.maxWidth = '310px'
    cconfirmContentText.style.position = 'absolute'
    cconfirmContentText.style.top = '20px'
    cconfirmContentText.style.left = '20px'
    cconfirmContentText.innerText = content

    cconfirmContent.appendChild(cconfirmContentText)

    let cconfirmButtonYes = document.createElement('button')
    cconfirmButtonYes.style.height = '30px'
    cconfirmButtonYes.style.width = '70px'
    cconfirmButtonYes.style.position = 'absolute'
    cconfirmButtonYes.style.top = '105px'
    cconfirmButtonYes.style.left = '70px'
    cconfirmButtonYes.innerText = '确定'
    cconfirmButtonYes.onclick = function() {
      if (callback) {
        callback()
      }
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement)
    }

    let cconfirmButtonNo = document.createElement('button')
    cconfirmButtonNo.style.height = '30px'
    cconfirmButtonNo.style.width = '70px'
    cconfirmButtonNo.style.position = 'absolute'
    cconfirmButtonNo.style.top = '105px'
    cconfirmButtonNo.style.right = '70px'
    cconfirmButtonNo.innerText = '取消'
    cconfirmButtonNo.onclick = function() {
      if (callback) {
        callback()
      }
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement)
    }

    cconfirm.appendChild(cconfirmTitle)
    cconfirm.appendChild(cconfirmContent)
    cconfirm.appendChild(cconfirmButtonYes)
    cconfirm.appendChild(cconfirmButtonNo)

    container.document.getElementsByTagName('body')[0].appendChild(cconfirm)
    // return 1
  } catch (error) {
    console.log(error)
    return 0
  }
}
