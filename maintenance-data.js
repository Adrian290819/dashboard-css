// maintenance-data.js
// Shared data layer untuk maintenance tasks

const MAINTENANCE_STORAGE_KEY = 'maintenanceTasks';

// Initialize sample data jika belum ada
function initializeMaintenanceData() {
    if (!localStorage.getItem(MAINTENANCE_STORAGE_KEY)) {
        const sampleTasks = [
            {
                id: 'MT-' + Date.now() + '-001',
                title: 'Server OS Update',
                category: 'server',
                priority: 'high',
                status: 'pending',
                dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                assignedTo: 'Bang Pengshui',
                description: 'Update the operating system on production servers to the latest security patch',
                notes: 'Need to schedule downtime for this maintenance',
                dateCreated: new Date().toISOString()
            },
            {
                id: 'MT-' + Date.now() + '-002',
                title: 'Database Backup Verification',
                category: 'database',
                priority: 'medium',
                status: 'in-progress',
                dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                assignedTo: 'Bang Pengshui',
                description: 'Verify the integrity of recent database backups and test restoration process',
                notes: 'Check both full and incremental backups',
                dateCreated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            }
        ];
        localStorage.setItem(MAINTENANCE_STORAGE_KEY, JSON.stringify(sampleTasks));
    }
}

// Get all maintenance tasks
function getMaintenanceTasks() {
    const tasks = localStorage.getItem(MAINTENANCE_STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

// Save maintenance tasks
function saveMaintenanceTasks(tasks) {
    localStorage.setItem(MAINTENANCE_STORAGE_KEY, JSON.stringify(tasks));
}

// Complete a task
function completeMaintenanceTask(taskId) {
    const tasks = getMaintenanceTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].status = 'completed';
        tasks[taskIndex].dateCompleted = new Date().toISOString();
        saveMaintenanceTasks(tasks);
        return true;
    }
    return false;
}

// Get only completed tasks
function getCompletedTasks() {
    return getMaintenanceTasks().filter(task => task.status === 'completed');
}

// Get pending/in-progress tasks
function getPendingTasks() {
    return getMaintenanceTasks().filter(task => task.status !== 'completed');
}

// Delete a task
function deleteMaintenanceTask(taskId) {
    const tasks = getMaintenanceTasks();
    const filteredTasks = tasks.filter(t => t.id !== taskId);
    saveMaintenanceTasks(filteredTasks);
    return true;
}

// Format date for display
function formatDisplayDate(dateString) {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Calculate days left
function getDaysLeft(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    
    const diffTime = due - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}