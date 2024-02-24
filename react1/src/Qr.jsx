

export const Qr = () => {
    return (
        <>
            <p>hi</p>
            <label htmlFor="dataInput" className="input-label">Enter the data for your QR code: </label>
            <input type="text" id="dataInput" className="input-field" placeholder="enter Data" />
            <label htmlFor="sizeInput" className="input-label">Enter the size of data : </label>
            <input type="text" id="sizeInput" className="input-field" placeholder="enter Data" />
            <submit>Generate the QR code</submit>
            <submit>download the Qr code</submit>
        </>
    );
} 
