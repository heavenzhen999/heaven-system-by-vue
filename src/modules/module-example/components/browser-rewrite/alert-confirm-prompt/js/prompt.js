/**
 * 自用alert弹窗
 * @param {String} content 弹窗内容
 * @param {String} type  alert类型
 * @param {String} title 弹窗title
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
    let cprompt = document.createElement('div')
    cprompt.className = 'cprompt'
    cprompt.style.position = 'absolute'
    cprompt.style.height = '150px'
    cprompt.style.width = '350px'
    cprompt.style.borderRadius = '6px'
    cprompt.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.50)'
    cprompt.style.zIndex = '10000000000'
    cprompt.style.top = top_ + 'px'
    cprompt.style.left = left_ + 'px'

    let cpromptTitle = document.createElement('div')
    cpromptTitle.className = 'cpromptTitle'
    cpromptTitle.style.position = 'relative'
    cpromptTitle.style.height = '30px'
    cpromptTitle.style.width = '100%'
    cpromptTitle.style.borderRadius = '6px 6px 0px 0px'
    cpromptTitle.style.backgroundColor = '#f0f0f0'

    let cpromptTitleText = document.createElement('div')
    cpromptTitleText.style.paddingTop = '5px'
    cpromptTitleText.style.paddingLeft = '10px'
    if (title) {
      cpromptTitleText.innerText = title
    } else {
      cpromptTitleText.innerText = '提示'
    }

    cpromptTitle.appendChild(cpromptTitleText)

    let cpromptTitleClose = document.createElement('div')
    cpromptTitleClose.style.position = 'absolute'
    cpromptTitleClose.style.top = '5px'
    cpromptTitleClose.style.right = '5px'
    cpromptTitleClose.style.height = '20px'
    cpromptTitleClose.style.width = '20px'
    cpromptTitleClose.style.cursor = 'pointer'
    cpromptTitleClose.onclick = function() {
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement.parentElement)
    }

    let cpromptTitleCloseCanvas = document.createElement('canvas')
    cpromptTitleCloseCanvas.className = 'cprompt-close-canvas'
    cpromptTitleCloseCanvas.style.height = '20px'
    cpromptTitleCloseCanvas.style.width = '20px'
    // 异步
    setTimeout(function() {
      let context = cpromptTitleCloseCanvas.getContext('2d')
      cpromptTitleCloseCanvas.height = 20
      cpromptTitleCloseCanvas.width = 20
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

    cpromptTitleClose.appendChild(cpromptTitleCloseCanvas)
    cpromptTitle.appendChild(cpromptTitleClose)

    let cpromptContent = document.createElement('div')
    cpromptContent.className = 'cpromptContent'
    cpromptContent.style.position = 'relative'
    cpromptContent.style.height = '120px'
    cpromptContent.style.width = '100%'
    cpromptContent.style.backgroundColor = '#FFFFFA'
    cpromptContent.style.borderRadius = '0px 0px 6px 6px'

    let cpromptContentText = document.createElement('div')
    if (!content) { content = '第一个传入参数不能为空值' }
    cpromptContentText.style.maxHeight = '80px'
    cpromptContentText.style.maxWidth = '310px'
    cpromptContentText.style.position = 'absolute'
    cpromptContentText.style.top = '20px'
    cpromptContentText.style.left = '20px'
    cpromptContentText.innerText = content

    cpromptContent.appendChild(cpromptContentText)

    let cpromptInput = document.createElement('input')
    cpromptInput.style.height = '20px'
    cpromptInput.style.width = '310px'
    cpromptInput.style.position = 'absolute'
    cpromptInput.style.top = '80px'
    cpromptInput.style.left = '20px'

    let cpromptButton = document.createElement('button')
    cpromptButton.style.height = '30px'
    cpromptButton.style.width = '70px'
    cpromptButton.style.position = 'absolute'
    cpromptButton.style.top = '110px'
    cpromptButton.style.left = '140px'
    cpromptButton.innerText = '确定'
    cpromptButton.onclick = function() {
      if (callback) {
        callback(cpromptInput.value)
      }
      container.document.getElementsByTagName('body')[0].removeChild(this.parentElement)
    }

    cprompt.appendChild(cpromptTitle)
    cprompt.appendChild(cpromptContent)
    cprompt.appendChild(cpromptInput)
    cprompt.appendChild(cpromptButton)

    container.document.getElementsByTagName('body')[0].appendChild(cprompt)
    return 1
  } catch (error) {
    console.log(error)
    return 0
  }
}
