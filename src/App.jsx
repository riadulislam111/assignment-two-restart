import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import StatusCard from './Components/StatusCard/StatusCard'
import TicketCard from './Components/TicketCard/TicketCard'
import Footer from './Components/Footer/Footer'


const initialTickets = [
  { id: 1001, title: "Login Issues", description: "Customer can't login...", priority: "High", status: "Open", date: "1/12/2024" },
  { id: 1002, title: "Payment Failed", description: "Card declined...", priority: "High", status: "Open", date: "1/15/2024" },
  { id: 1003, title: "App Crash", description: "Crashes on launch...", priority: "High", status: "Open", date: "1/18/2024" },
];

function App() {
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);


  const handleAddToProgress = (ticket) => {
    const isExist = inProgressTasks.find(item => item.id === ticket.id);
    if (!isExist) {
      setInProgressTasks([...inProgressTasks, ticket]);
      alert("Ticket added to Task Status!");
    } else {
      alert("This ticket is already in progress.");
    }
  };

 
  const handleCompleteTask = (id) => {
    const remaining = inProgressTasks.filter(task => task.id !== id);
    setInProgressTasks(remaining);
    setResolvedCount(resolvedCount + 1);
    alert("Task Completed!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <StatusCard inProgress={inProgressTasks.length} resolved={resolvedCount} />
      
      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
       
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-5">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initialTickets.map(ticket => (
              <div key={ticket.id} onClick={() => handleAddToProgress(ticket)} className="cursor-pointer">
                <TicketCard ticket={ticket} />
              </div>
            ))}
          </div>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow-sm border border-dashed border-blue-400">
          <h2 className="text-xl font-bold mb-4">Task Status</h2>
          <p className="text-sm text-gray-500 mb-6">Select a ticket to add to Task Status</p>
          
          <div className="space-y-4">
            {inProgressTasks.map(task => (
              <div key={task.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center border">
                <p className="font-medium text-sm">{task.title}</p>
                <button 
                  onClick={() => handleCompleteTask(task.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
                >
                  Complete
                </button>
              </div>
            ))}
            {inProgressTasks.length === 0 && <p className="text-gray-400 text-center italic">No active tasks</p>}
          </div>

          <div className="mt-10">
            <h3 className="font-bold border-b pb-2">Resolved Task</h3>
            <p className="text-sm text-gray-400 mt-4">Resolved tasks count: {resolvedCount}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App