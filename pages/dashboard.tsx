import { LogoutIcon } from '@heroicons/react/solid'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'
import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'
import { Userinfo } from '../components/Userinfo'

const Dashboard: NextPage = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const logout = async () => {
    queryClient.removeQueries(['tasks'])
    queryClient.removeQueries(['user'])
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    router.push('/')
  }
  return (
    <Layout title="Task Board">
      <LogoutIcon 
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={logout} 
      >
      </LogoutIcon>
      <Userinfo />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default Dashboard