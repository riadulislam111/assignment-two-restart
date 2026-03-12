const TicketCard = ({ ticket }) => {
    const priorityColor = ticket.priority === 'High' ? 'text-red-500' : 'text-yellow-500';
    
    return (
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-800 leading-tight">{ticket.title}</h4>
                <span className="bg-green-100 text-green-600 text-[10px] px-2 py-1 rounded-full font-bold">● Open</span>
            </div>
            <p className="text-xs text-gray-500 mb-4 line-clamp-2">{ticket.description}</p>
            <div className="flex justify-between items-center text-[10px] font-bold border-t pt-3">
                <span className={priorityColor}>#{ticket.id} {ticket.priority.toUpperCase()} PRIORITY</span>
                <span className="text-gray-400">{ticket.date}</span>
            </div>
        </div>
    );
};
export default TicketCard;