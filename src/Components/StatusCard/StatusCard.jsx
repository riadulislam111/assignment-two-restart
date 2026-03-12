const StatusCard = ({ inProgress, resolved }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-10 px-4'>
            {/* In-Progress Card */}
            <div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-10 text-white'>
                <div className="relative z-10 text-center">
                    <h3 className="text-xl font-semibold opacity-90">In-Progress</h3>
                    <div className="text-7xl font-black">{inProgress}</div>
                </div>
            </div>

            {/* Resolved Card */}
            <div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] p-10 text-white'>
                <div className="relative z-10 text-center">
                    <h3 className="text-xl font-semibold opacity-90">Resolved</h3>
                    <div className="text-7xl font-black">{resolved}</div>
                </div>
            </div>
        </div>
    );
};
export default StatusCard;