import profileService from '../request/profileService'

export default async (token) => {
  const response = await profileService.getMe(token)
  if (response.status === 200) {
    const { data: department } = await profileService.getDepartmentData(response.data.profile.faculty_department_id)
    response.data.profile.department = department
    return response.data
  } else {
    return false
  }
}
