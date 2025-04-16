import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function SWRRandomUserCard() {
  const { data, error, isLoading } = useSWR('https://randomuser.me/api/', fetcher);

  if (error) return <div>❌ Failed to load</div>;
  if (isLoading) return <div>⏳ Loading...</div>;

  const user = data.results[0];

  return (
    <div className="p-4 bg-white rounded shadow-md w-64 text-center">
      <img src={user.picture.large} alt="User" className="rounded-full mx-auto mb-2" />
      <h2 className="text-lg font-bold">{user.name.first} {user.name.last}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  );
}
