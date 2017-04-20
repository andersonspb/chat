export const assignUser = () => {
  const user =  'u' + Math.floor(Math.random() * 1000).toString();
  return {
    type: 'ASSIGN_USER',
    user: user
  }
}


