import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Query</h1>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </>
  );
}

export default App;
