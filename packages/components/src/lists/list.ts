export const ListStyles = () => {
  return {
    '.md-list': {
      display: 'flex',
      flexDirection: 'column',

      '&-item': {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '8px 24px 8px 16px',
      }
    }
  }
}