import matplotlib.pyplot as plt
import matplotlib.patches as patches

# Create a figure and axis
fig, ax = plt.subplots(figsize=(10, 6))

# Draw the main system box
ax.add_patch(patches.Rectangle((0.1, 0.3), 0.8, 0.4, fill=False, edgecolor='black', lw=2))
ax.text(0.5, 0.55, 'Resort Management System', horizontalalignment='center', fontsize=14, fontweight='bold')

# Define actors
actors = {
    'Guests': (0.05, 0.7),
    'Admins': (0.05, 0.1)
}

# Define use cases for Guests
guest_use_cases = [
    'Login/Logout',
    'Register',
    'Browse Rooms',
    'Book Rooms',
    'View Profile',
    'Cancel Booking',
    'Make Payment',
    'Book Activities',
    'Manage Bookings'
]

# Define use cases for Admins
admin_use_cases = [
    'Manage Rooms',
    'Manage Activities',
    'View Earnings',
    'Manage Users'
]

# Draw actors and their use cases
for actor, position in actors.items():
    ax.text(position[0], position[1], actor, fontsize=12, fontweight='bold', ha='center')
    ax.plot([position[0] + 0.02, 0.1], [position[1], position[1] + 0.5], 'k--')

# Position for guest use cases
for i, use_case in enumerate(guest_use_cases):
    ax.text(0.5, 0.5 - i * 0.05, use_case, fontsize=10, ha='center')
    ax.plot([0.5 - 0.25, 0.5], [0.5 - i * 0.05, 0.5 - i * 0.05], 'k--')

# Position for admin use cases
for i, use_case in enumerate(admin_use_cases):
    ax.text(0.5, 0.2 - i * 0.05, use_case, fontsize=10, ha='center')
    ax.plot([0.5 - 0.25, 0.5], [0.2 - i * 0.05, 0.2 - i * 0.05], 'k--')

# Set limits and hide axes
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.axis('off')

# Show the plot
plt.title('Use Case Diagram for Resort Management System', fontsize=16, fontweight='bold')
plt.tight_layout()

# Save the image
use_case_diagram_path = '/mnt/data/resort_management_use_case_diagram.png'
plt.savefig(use_case_diagram_path, format='png')
plt.show()

use_case_diagram_path
