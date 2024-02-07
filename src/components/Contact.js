const Contact = () => {
    return (
        <div>
            <h1 className="bold font-bold text-lg">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className="border border-black rounded-lg p-2 m-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;