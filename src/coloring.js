export function GetColorByRank(rank, style) {
  let color = '#ACACAC'
  if (rank === 'HOLY') {
    color = '#E67F4C'
  } else if (rank === 'PLAYER') {
    color = '#434343'
  } else if (rank === 'VIP') {
    color = '#85BE53'
  } else if (rank === 'IMMORTAL') {
    color = '#9B68AE'
  } else if (rank === 'MODER' || rank === 'WARDEN' || rank === 'CHIEF') {
    color = '#3A67A5'
  } else if (rank === 'PREMIUM') {
    color = '#58ABBD'
  } else if (rank === 'BUILDER' || rank === 'MAPLEAD') {
    color = '#3DD761'
  } else if (rank === 'YOUTUBE') {
    color = '#D24872'
  }
  style.color = color
  if (rank !== 'PLAYER') {
    style.textShadow = '0px 1px 1px black, 0 0 6px' + color
  }
  return style
}
