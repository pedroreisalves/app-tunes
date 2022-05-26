export const setUser = (email, username) => {
  localStorage.setItem('userInfo', JSON.stringify({ email, username, icon: '', description: '' }))
}

export const editUser = (email, username, icon, description) => {
  localStorage.setItem('userInfo', JSON.stringify({ email, username, icon, description }))
}

export const getUser = () => JSON.parse(localStorage.getItem('userInfo'));
