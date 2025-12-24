import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {
  return (
    // 1. h-screen: Cố định chiều cao bằng đúng màn hình (thay vì min-h-screen)
    // 2. overflow-hidden: Chặn thanh cuộn của cả trang
    // 3. flex flex-col: Sắp xếp các phần tử theo chiều dọc
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header sẽ đứng yên ở trên cùng */}
      <Header />

      <main className="flex-1 overflow-y-auto pt-20">
        <Outlet />
      </main>

      {/* Footer sẽ đứng yên ở dưới cùng (nếu muốn) */}
      <Footer />
    </div>
  );
}
