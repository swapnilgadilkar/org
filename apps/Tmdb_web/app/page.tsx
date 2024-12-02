'use client';
import { FlatList } from '@org/shared-ui';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'no-store', // Ensures fresh data is fetched for each request.
  });
  return response.json();
}

export default async function HomePage() {
  const data = await fetchData();
  return (
    <div>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        )}
        keyExtractor={(item) => item.id}
      />
    </div>
  );
}
