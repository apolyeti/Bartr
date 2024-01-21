export default function Page({ params }: { params: { user: string } }) {
    return <div>UserId: {params.user}</div>
  }