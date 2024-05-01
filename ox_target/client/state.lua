local state = {}

local isActive = true

---@return boolean
function state.isActive()
    return isActive
end

---@param value boolean
function state.setActive(value)

    if value then
        SendNuiMessage('{"event": "visible", "state": "flex"}')
    else
        SendNuiMessage('{"event": "visible", "state": "none"}')
    end
end

local nuiFocus = false

---@return boolean
function state.isNuiFocused()
    return nuiFocus
end


function state.optionscreated()
    return nuiFocus
end

---@param state boolean
function state.setoptionsopened(state)
    nuiFocus = state
end

---@param value boolean
function state.setNuiFocus(value, cursor)
    if value then SetCursorLocation(0.5, 0.5) end

    nuiFocus = value
    SetNuiFocus(value, cursor or false)
    SetNuiFocusKeepInput(value)
end

local isDisabled = false

---@return boolean
function state.isDisabled()
    return isDisabled
end

---@param value boolean
function state.setDisabled(value)
    isDisabled = value
end

return state
