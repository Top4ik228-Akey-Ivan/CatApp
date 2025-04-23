import React, { useState } from 'react';
import styles from './CatBySass.module.scss';
import useCatApi from '../../hooks/useCatApi';

const CatBySass: React.FC = () => {
    const [enabled, setEnabled] = useState(true);
    const [autoRefresh, setAutoRefresh] = useState(false);

    const { catData, loading, error, fetchCat } = useCatApi(autoRefresh && enabled);

    const handleAutoRefreshChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutoRefresh(e.target.checked);
    };

    const handleGetCat = () => {
        if (enabled) {
            fetchCat();
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.card}>
                <div className={styles.checkboxes}>
                    {/* Checkbox 1 - Enabled */}
                    <label className={styles.checkboxContainer}>
                        <span className={styles.label}>Enabled</span>
                        <input
                            type="checkbox"
                            checked={enabled}
                            onChange={(e) => setEnabled(e.target.checked)}
                            disabled={loading}
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    {/* Checkbox 2 - Auto-refresh */}
                    <label className={styles.checkboxContainer}>
                        <span className={styles.label}>Auto-refresh 5 seconds</span>
                        <input
                            type="checkbox"
                            checked={autoRefresh}
                            onChange={handleAutoRefreshChange}
                            disabled={!enabled || loading}
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>

                {/* Кнопка Get Cat */}
                <button
                    className={styles.getCatButton}
                    onClick={handleGetCat}
                    disabled={!enabled || loading || autoRefresh}
                >
                    {loading ? 'Loading...' : 'Get Cat'}
                </button>

                {error && <div className={styles.error}>Error: {error}</div>}
                {catData && (
                    <div className={styles.catImageContainer}>
                        <img src={catData[0].url} alt="Random cat" className={styles.catImage} />
                        {autoRefresh && enabled && (
                            <div className={styles.autoRefreshInfo}>
                                Auto-refresh every 5 seconds...
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CatBySass;
