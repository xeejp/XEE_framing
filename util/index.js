﻿export function getPage(page) {
  switch(page) {
    case 'waiting':
      return '待機'
    case 'experiment':
      return '実験'
    case 'result':
      return '結果'
    default:
      return page
  }
}
