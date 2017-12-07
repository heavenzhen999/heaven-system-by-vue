/**
 * 自用alert弹窗
 * @param {String} content 弹窗内容
 * @param {String} title 弹窗title
 */
export default function(content, title) {
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

    let calert = document.createElement('div')
    calert.className = 'calert'
    calert.style.position = 'absolute'
    calert.style.height = '150px'
    calert.style.width = '350px'
    calert.style.borderRadius = '6px'
    calert.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.50)'
    calert.style.zIndex = '10000000000'
    calert.style.top = top_ + 'px'
    calert.style.left = left_ + 'px'

    let calertTitle = document.createElement('div')
    calertTitle.className = 'calertTitle'
    calertTitle.style.position = 'relative'
    calertTitle.style.height = '30px'
    calertTitle.style.width = '100%'
    calertTitle.style.borderRadius = '6px 6px 0px 0px'
    calertTitle.style.backgroundColor = '#f0f0f0'

    let calertTitleText = document.createElement('div')
    calertTitleText.style.paddingTop = '5px'
    calertTitleText.style.paddingLeft = '10px'
    if (title) {
      calertTitleText.innerText = title
    } else {
      calertTitleText.innerText = '提示'
    }

    calertTitle.appendChild(calertTitleText)

    let calertTitleClose = document.createElement('div')
    calertTitleClose.style.position = 'absolute'
    calertTitleClose.style.top = '5px'
    calertTitleClose.style.right = '5px'
    calertTitleClose.style.height = '20px'
    calertTitleClose.style.width = '20px'
    calertTitleClose.style.cursor = 'pointer'
    calertTitleClose.onclick = function() {
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement.parentElement)
    }
    let calertTitleCloseCanvas = document.createElement('canvas')
    calertTitleCloseCanvas.className = 'calert-close-canvas'
    calertTitleCloseCanvas.style.height = '20px'
    calertTitleCloseCanvas.style.width = '20px'
    // 异步
    setTimeout(function() {
      let context = calertTitleCloseCanvas.getContext('2d')
      calertTitleCloseCanvas.height = 20
      calertTitleCloseCanvas.width = 20
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

    calertTitleClose.appendChild(calertTitleCloseCanvas)

    calertTitle.appendChild(calertTitleClose)

    let calertContent = document.createElement('div')
    calertContent.className = 'calertContent'
    calertContent.style.position = 'relative'
    calertContent.style.height = '120px'
    calertContent.style.width = '100%'
    calertContent.style.backgroundColor = '#FFFFFA'
    calertContent.style.borderRadius = '0px 0px 6px 6px'

    let calertContentText = document.createElement('div')
    if (!content) { content = '第一个传入参数不能为空值' }
    calertContentText.style.maxHeight = '80px'
    calertContentText.style.maxWidth = '310px'
    calertContentText.style.position = 'absolute'
    calertContentText.style.top = '20px'
    calertContentText.style.left = '20px'
    calertContentText.innerText = content

    calertContent.appendChild(calertContentText)

    let calertButton = document.createElement('button')
    calertButton.style.height = '30px'
    calertButton.style.width = '70px'
    calertButton.style.position = 'absolute'
    calertButton.style.top = '105px'
    calertButton.style.left = '140px'
    calertButton.innerText = '确定'
    calertButton.onclick = function() {
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement)
    }

    calert.appendChild(calertTitle)
    calert.appendChild(calertContent)
    calert.appendChild(calertButton)

    container.document.getElementsByTagName('body')[0].appendChild(calert)
    return 1
  } catch (error) {
    console.log(error)
    return 0
  }
}
