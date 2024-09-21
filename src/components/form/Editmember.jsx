import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/authentication";


function EditmembersForm(props) {
  const [member, setMember] = useState({ ...props.data });
  const [company, setCompany] = useState([]);
  const [team, setTeam] = useState([]);
  const [teamSelect, setTeamSelect] = useState(member.company.team.team_id);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { apiUrl } = useAuth()

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      ...member,
      date_of_Sign: member.date_of_Sign.split('T')[0],
      team_id: member.company.team.team_id,
      comp_id: member.company.comp_id,
    },
  });

  useEffect(() => {
    reset({
      ...member,
      date_of_Sign: member.date_of_Sign.split('T')[0],
      team_id: member.company.team.team_id,
      comp_id: member.company.comp_id,
    });
  }, [member, reset]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await axios.put(`${apiUrl}/aup/` + member.member_id, {
        comp_id: data.comp_id,
        card_id: data.card_id,
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        date_of_Sign: data.date_of_Sign,
        team_id: data.team_id
    });
      navigate('/members');
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: "Update member successfully!",
      });
    } catch (error) {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  };

  const getTeams = async () => {
    try {
      const result = await axios.get(`${apiUrl}/aup/company`);
      setTeam(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectCompany = () => {
    const selectedTeam = team.find((item) => item.team_id === Number(teamSelect));
    if (selectedTeam) {
      setCompany(selectedTeam.companies);
    } else {
      setCompany([]);
    }
  };

  useEffect(() => {
    if (teamSelect) {
      selectCompany();
    }
  }, [teamSelect, team]);

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 md:w-3/4 text-center">
      <label className="flex justify-between items-center">
        ชื่อจริง
        <input {...register("first_name", { required: true, maxLength: 255 })} placeholder="Enter your firstname" className="bg-gray-100 rounded w-3/5 p-2" />
      </label>
      <label className="flex justify-between items-center">
        นามสกุล
        <input {...register("last_name", { required: true, maxLength: 255 })} placeholder="Enter your lastname" className="bg-gray-100 rounded w-3/5 p-2" />
      </label>
      <label className="flex justify-between items-center">
        เลขบัตรประชาชน
        <input {...register("card_id", { required: true, maxLength: 255 })} placeholder="Enter your card ID" className="bg-gray-100 rounded w-3/5 p-2" />
      </label>
      <label className="flex justify-between items-center">
        วันที่เข้าดำเนินการ
        <input {...register("date_of_Sign", { required: true })} type="date" className="bg-gray-100 rounded w-3/5 p-2" />
      </label>
      <label className="flex justify-between items-center">
        ประเภททีม
        <select {...register("team_id", { required: true })} value={teamSelect} onChange={(e) => setTeamSelect(e.target.value)} className="bg-gray-100 rounded w-3/5 p-2">
          {team.map((team, index) => (
            <option key={index} value={team.team_id}>
              {team.team_name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex justify-between items-center">
        บริษัท
        <select {...register("comp_id", { required: true })} className="bg-gray-100 rounded w-3/5 p-2">
          {company.map((item, index) => (
            <option key={index} value={item.comp_id}>
              บริษัท {item.comp_name_thai} จำกัด - {item.comp_name_eng}
            </option>
          ))}
        </select>
      </label>
      <label className="flex justify-between items-center">
        ที่อยู่
        <textarea {...register("address")} placeholder="123 dacrord .." className="bg-gray-100 rounded w-3/5 p-2" />
      </label>
      <div className="w-full flex gap-2 justify-end">
        <button type="submit" className="btn btn-success w-20 text-white">
          {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
        </button>
        <a href="/members" className="btn w-20 text-black">
          Cancel
        </a>
      </div>
    </form>
  );
}

export default EditmembersForm;
