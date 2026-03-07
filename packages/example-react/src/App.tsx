import React, { useState } from 'react';
import { Skelon } from '@skelon/react';

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="container">
            <header className="header">
                <h1>⚡ Skelon</h1>
                <p>Intelligent Skeleton Engine</p>
                <button className="toggle-btn" onClick={() => setLoading(!loading)}>
                    Toggle Loading State
                </button>
            </header>

            <main className="feed">
                <Skelon loading={loading}>
                    <div className="card">
                        <div className="card-header">
                            <img
                                className="avatar"
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Avatar"
                            />
                            <div className="titles">
                                <h2 className="name">Felix the Cat</h2>
                                <p className="subtitle">Product Designer</p>
                            </div>
                            <button className="follow-btn">Follow</button>
                        </div>

                        <div className="card-body">
                            <p>Just wrapped this component in <code>{`<Skelon>`}</code> and the AI engine figured out exactly where to put the circles, texts, and buttons.</p>
                        </div>
                    </div>
                </Skelon>

                <Skelon loading={loading}>
                    <div className="card">
                        <div className="card-header">
                            <img
                                className="avatar"
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bella"
                                alt="Avatar"
                            />
                            <div className="titles">
                                <h2 className="name">Bella SW</h2>
                                <p className="subtitle">Software Engineer</p>
                            </div>
                            <button className="follow-btn">Follow</button>
                        </div>

                        <img className="post-image" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop" alt="Code" />
                    </div>
                </Skelon>
            </main>
        </div>
    );
}

export default App;
