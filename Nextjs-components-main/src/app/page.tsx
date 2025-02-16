import Card from "./../../component/card";
import Header from "./../../component/Header";
import About from "./../../component/About";

export default function firstName () {
  return (
    <div>
      <Header/>
      <div className="p-6">
        <h2 className="text-xl font-semibold">Welcome to Our Homepage</h2>
        <p className="mt-4 text-gray-700">
          Explore our amazing features and services.
        </p>
        </div>
      <About/>
      <Card/>
    </div>
  )
}
