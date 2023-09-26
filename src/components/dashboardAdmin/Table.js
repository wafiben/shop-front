import {Table} from "react-bootstrap";
import UserAction from "./UserAction";
function TableUsers({users,typeUsers,choice}) {
	return (
		<>
			{users.length!==0&&<div className="container-headerelimant">
				<Table>
					<thead>
						<tr className="">
							<th className="">name</th>
							<th className="">Status</th>
							<th className="">email</th>
							<th className="">Number Phone</th>

							{typeUsers==="company"&&(
								<>
									<th className="">Country</th>
									<th className="">Region</th>
								</>
							)}

							<th className=""> Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td className="">
									{typeUsers==="company"
										? user.nameOfComany
										:`${user.firstName} ${user.lastName}`}
								</td>
								<td className="">
									{typeUsers}
								</td>
								<td className="">{user.email}</td>
								<td className="">{user.phone}</td>
								{typeUsers==="company"&&(
									<>
										<td className="">{user.country}</td>
										<td className="">{`${user.state}/${user.region}`}</td>
									</>
								)}
								<td>
									<UserAction user={user} choice={choice} />
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>}

		</>
	);
}

export default TableUsers;
