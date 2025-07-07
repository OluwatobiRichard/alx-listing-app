import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
        <Card
          title="Sample Property"
          image="/assets/placeholder.jpg"
          description="This is a beautiful property available for rent."
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={handleClick} />
        </div>
      </main>
    </>
  );
}
